// permissions helpers for bus route planner for district transportation

export function permissionsStep0(records, limit = 497) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep1(records, limit = 380) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep2(records, limit = 322) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep3(records, limit = 331) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep4(records, limit = 57) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep5(records, limit = 140) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
