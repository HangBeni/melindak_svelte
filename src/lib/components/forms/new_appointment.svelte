<script lang="ts">
    import type { Appointments } from "$lib/utils/types";

    export let appointments: Appointments[];

    let today = new Date();
    let selectedDate = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();

    function getDaysInMonth(month: number, year: number) {
        return new Date(year, month + 1, 0).getDate();
    }


    function getSelectedDayClass(day: number) {
        if (day == selectedDate.getDate() && month == selectedDate.getMonth() && year == selectedDate.getFullYear()) {
            return "selected";
        }
        if (day == today.getDate() && month == today.getMonth() && year == today.getFullYear()) {
            return "today";
        }
    }

    function isSelectedDay(day: number) {
        return day == selectedDate.getDate() && month == selectedDate.getMonth() && year == selectedDate.getFullYear();
    }

    function gotoNextMonth() {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
    }

    function gotoPrevMonth() {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
    }

</script>

<form action=""></form>

<!-- Itt lehet majd point and click-el időpontot választani -->


<div class="calendar">
    <div class="nav" on:click={gotoPrevMonth}>prev</div>
    <div class="nav" on:click={gotoNextMonth}>next</div>
    <div class="day" style="grid-column: span 5;">{new Intl.DateTimeFormat('hu-HU', { month: 'long', year: 'numeric' }).format(new Date(year, month, 1))}</div>
    <div class="day">H</div>
    <div class="day">K</div>
    <div class="day">Sze</div>
    <div class="day">Cs</div>
    <div class="day">P</div>
    <div class="day">Szo</div>
    <div class="day">V</div>
    {#each Array.from({ length: getDaysInMonth(month, year) }) as _, i}
        <div class="day {getSelectedDayClass(i+1)}" on:click={() => selectedDate = new Date(year, month, i+1)}>{i+1}</div>
    {/each}
</div>

<style>
    .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 0.5rem;
        width: 100%;
        margin: 0 auto;
    }

    .calendar > * {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    }

    .calendar > *:hover {
        background-color: #eee;
        cursor: pointer;
    }
</style>



