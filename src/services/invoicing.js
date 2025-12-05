// invoicing helpers for bus route planner for district transportation

export function invoicingStep0(records, limit = 183) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep1(records, limit = 135) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep2(records, limit = 112) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep3(records, limit = 292) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep4(records, limit = 198) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep5(records, limit = 153) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep6(records, limit = 461) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function invoicingStep7(records, limit = 407) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('invoicing step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
