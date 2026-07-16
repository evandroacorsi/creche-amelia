const FOUNDATION_DATE = { year: 1969, month: 0, day: 26 };

export function getInstitutionYears(referenceDate = new Date()) {
  let years = referenceDate.getFullYear() - FOUNDATION_DATE.year;
  const anniversaryHasPassed =
    referenceDate.getMonth() > FOUNDATION_DATE.month ||
    (referenceDate.getMonth() === FOUNDATION_DATE.month && referenceDate.getDate() >= FOUNDATION_DATE.day);

  if (!anniversaryHasPassed) {
    years -= 1;
  }

  return years;
}
