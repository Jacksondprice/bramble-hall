// archiving helpers for bus route planner for district transportation

export function archivingStep0(records, limit = 188) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep1(records, limit = 258) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep2(records, limit = 233) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep3(records, limit = 201) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep4(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep5(records, limit = 442) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep6(records, limit = 469) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep7(records, limit = 194) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
