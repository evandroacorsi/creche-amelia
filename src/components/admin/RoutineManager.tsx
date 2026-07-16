import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { fetchJson } from "@/lib/api";
import { initialRoutine, type RoutineItem } from "@/lib/team";
import { ArrowDown, ArrowUp, Plus, Save, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const getSessionToken = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("Sessão inválida");
  return session.access_token;
};

export function RoutineManager() {
  const [routine, setRoutine] = useState<RoutineItem[]>(initialRoutine);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const load = useCallback(async () => {
    try { const data = await fetchJson<{ rotina: RoutineItem[] }>("/api/team.php"); if (data.rotina.length) setRoutine(data.rotina); }
    catch (error) { toast({ title: "Erro ao carregar rotina", description: error instanceof Error ? error.message : "Tente novamente.", variant: "destructive" }); }
    finally { setLoading(false); }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  const update = (index: number, field: "hora" | "atividade", value: string) => setRoutine((items) => items.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
  const move = (index: number, direction: -1 | 1) => setRoutine((items) => { const target = index + direction; if (target < 0 || target >= items.length) return items; const next = [...items]; [next[index], next[target]] = [next[target], next[index]]; return next; });
  const save = async () => {
    try { setSaving(true); const token = await getSessionToken(); await fetchJson("/api/team.php", { method: "PATCH", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ rotina: routine }) }); toast({ title: "Rotina atualizada" }); }
    catch (error) { toast({ title: "Erro ao salvar", description: error instanceof Error ? error.message : "Tente novamente.", variant: "destructive" }); }
    finally { setSaving(false); }
  };

  return <div className="space-y-4"><p className="text-muted-foreground">Edite a sequência exibida na página de informações para pais.</p>{loading ? <div className="p-8 text-center text-muted-foreground">Carregando rotina...</div> : <div className="space-y-2">{routine.map((item, index) => <div key={item.id} className="flex items-center gap-2 rounded-lg border bg-card p-3"><div className="flex shrink-0 gap-1"><Button size="icon" variant="ghost" disabled={index === 0} onClick={() => move(index, -1)}><ArrowUp className="h-4 w-4" /></Button><Button size="icon" variant="ghost" disabled={index === routine.length - 1} onClick={() => move(index, 1)}><ArrowDown className="h-4 w-4" /></Button></div><Input className="w-24" aria-label="Horário" value={item.hora} onChange={(e) => update(index, "hora", e.target.value)} /><Input className="flex-1" aria-label="Atividade" value={item.atividade} onChange={(e) => update(index, "atividade", e.target.value)} /><Button size="icon" variant="ghost" className="text-destructive" onClick={() => setRoutine((items) => items.filter((_, itemIndex) => itemIndex !== index))}><Trash2 className="h-4 w-4" /></Button></div>)}</div>}<div className="flex flex-wrap gap-3"><Button variant="outline" className="gap-2" onClick={() => setRoutine((items) => [...items, { id: `rotina-${Date.now()}`, hora: "", atividade: "" }])}><Plus className="h-4 w-4" />Adicionar horário</Button><Button className="gap-2" disabled={saving} onClick={save}><Save className="h-4 w-4" />{saving ? "Salvando..." : "Salvar rotina"}</Button></div></div>;
}
