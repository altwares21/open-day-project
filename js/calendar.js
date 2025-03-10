document.addEventListener("DOMContentLoaded", function () {
    let currentMonth = 2; // March (0-based index)
    let currentYear = 2025;

    function generateCalendar(month, year) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let calendarHTML = '<table class="calendar-table"><thead><tr>';

        // Days of the week
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        daysOfWeek.forEach(day => {
            calendarHTML += `<th>${day}</th>`;
        });
        calendarHTML += '</tr></thead><tbody><tr>';

        // Extract events from table
        let events = {};
        document.querySelectorAll(".event-table tbody tr").forEach(row => {
            let dateText = row.cells[0].textContent.trim();
            let eventText = row.cells[1].textContent.trim();

            if (dateText) {
                let monthMatch = dateText.match(/(January|February|March|April|May|June|July|August|September|October|November|December)/i);
                let matchedDates = dateText.match(/\d+/g); // Extract numbers (dates) from text

                if (monthMatch && matchedDates) {
                    let eventMonth = new Date(`${monthMatch[0]} 1, ${year}`).getMonth(); // Convert text month to index
                    if (eventMonth === month) {
                        matchedDates.forEach(date => {
                            let day = parseInt(date, 10);
                            if (!isNaN(day)) {
                                if (!events[day]) events[day] = [];
                                events[day].push(eventText);
                            }
                        });
                    }
                }
            }
        });

        // Fill in the days
        let dayOfWeek = new Date(year, month, 1).getDay();
        for (let i = 0; i < dayOfWeek; i++) {
            calendarHTML += '<td></td>';
        }
        for (let day = 1; day <= daysInMonth; day++) {
            if (dayOfWeek === 7) {
                dayOfWeek = 0;
                calendarHTML += '</tr><tr>';
            }

            let eventText = events[day] ? `<br><span class="event">${events[day].join("<br>")}</span>` : "";
            let cellClass = events[day] ? "event-day" : ""; // Add class for event days
            calendarHTML += `<td class="${cellClass}">${day}${eventText}</td>`;
            dayOfWeek++;
        }
        while (dayOfWeek < 7) {
            calendarHTML += '<td></td>';
            dayOfWeek++;
        }
        calendarHTML += '</tr></tbody></table>';

        document.getElementById("calendar-month").textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        document.getElementById("calendar").innerHTML = calendarHTML;
    }

    // Navigation buttons
    document.getElementById("prevMonth").addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    });

    document.getElementById("nextMonth").addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    });

    // Initialize the calendar
    generateCalendar(currentMonth, currentYear);
});
