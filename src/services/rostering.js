// rostering helpers for bus route planner for district transportation

export function rosteringStep0(records, limit = 307) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep1(records, limit = 226) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep2(records, limit = 216) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep3(records, limit = 435) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep4(records, limit = 79) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep5(records, limit = 149) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function rosteringStep6(records, limit = 426) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('rostering step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
