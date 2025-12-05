// notifications helpers for bus route planner for district transportation

export function notificationsStep0(records, limit = 405) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep1(records, limit = 126) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep2(records, limit = 95) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep3(records, limit = 14) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep4(records, limit = 470) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep5(records, limit = 444) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep6(records, limit = 484) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
