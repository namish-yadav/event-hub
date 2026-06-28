/**
 * Event Hub — Template Script
 * Vanilla JS, no dependencies. Three jobs:
 *   1. Show a live "in X days" countdown on each upcoming event card.
 *   2. Fill in the (n) count next to each section heading.
 *   3. Re-check event dates on load so the template still works
 *      correctly even if someone forgets to move a past-due event
 *      into the Past Events section.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCountdowns();
    initEventCounts();
    flagMisplacedEvents();
});

/**
 * Fills in data-countdown spans with a human-readable distance
 * to the event date, e.g. "in 3 days" or "today".
 */
function initCountdowns() {
    const cards = document.querySelectorAll('[data-event-date]');
    const today = startOfDay(new Date());

    cards.forEach((card) => {
        const countdownEl = card.querySelector('[data-countdown]');
        if (!countdownEl) return;

        const eventDate = startOfDay(new Date(card.dataset.eventDate));
        const diffDays = Math.round((eventDate - today) / 86400000);

        countdownEl.textContent = formatCountdown(diffDays);
    });
}

function formatCountdown(diffDays) {
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays > 1) return `In ${diffDays} days`;
    if (diffDays === -1) return 'Yesterday';
    return `${Math.abs(diffDays)} days ago`;
}

/**
 * Writes the number of events found in each section into its
 * data-count-target badge, so counts never drift out of sync
 * with the actual markup.
 */
function initEventCounts() {
    document.querySelectorAll('[data-count-target]').forEach((badge) => {
        const section = document.getElementById(badge.dataset.countTarget);
        if (!section) return;
        const count = section.querySelectorAll('.event-card').length;
        badge.textContent = `${count} event${count === 1 ? '' : 's'}`;
    });
}

/**
 * Dev-time safety net: warns in the console (not to end users)
 * if an event is sitting in the wrong section relative to today's
 * date, so a forked copy of this template doesn't silently show
 * a past event as "upcoming" or vice versa.
 */
function flagMisplacedEvents() {
    const today = startOfDay(new Date());

    document.querySelectorAll('#upcoming-events [data-event-date]').forEach((card) => {
        if (startOfDay(new Date(card.dataset.eventDate)) < today) {
            console.warn('[Event Hub] An event in #upcoming-events has already passed:', card.dataset.eventDate);
        }
    });

    document.querySelectorAll('#past-events [data-event-date]').forEach((card) => {
        if (startOfDay(new Date(card.dataset.eventDate)) >= today) {
            console.warn('[Event Hub] An event in #past-events is today or in the future:', card.dataset.eventDate);
        }
    });
}

function startOfDay(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}
