<script lang="ts">
    import { reg_email, reg_name, reg_tel, validInputs } from "$lib/utils/regex";
    import type { Appointments, AppointmentTimes } from "$lib/utils/types";
    import { emailValidator, NameValidator, telephoneValidator } from "$lib/validators";
    import { onDestroy, onMount } from "svelte";

    export let booked_appointments: Appointments[];
    export let available_appointments: AppointmentTimes[];

    let formLabels: HTMLLabelElement[] = [];
    let formInputs: HTMLInputElement[] = [];

    onMount(() => {
        const form = document.querySelector("form") as HTMLFormElement;
        formLabels = Array.from(form.querySelectorAll("label")).filter(
            (el) => !el.parentElement?.matches("select") && !el.matches("label[for='weeks']"),
        ) as HTMLLabelElement[];
        formInputs = Array.from(form.querySelectorAll("input")).filter(
            (el) => !el.parentElement?.matches("select") && !el.matches("input[name='weeks']"),
        ) as HTMLInputElement[];
    });

    let availableSlots: string[] = available_appointments.map(
        (slot) => slot.time,
    );
    let colleagues = ["Kárász Melinda", "Kaizer Melinda"];

    let selectedSlot = "";
    let selectedColleague = "";
    let bookedAppointments: Appointments[] = booked_appointments;
    let slots: any[] = [];

    const daysOfWeek = ["H", "K", "Sz", "Cs", "P", "Sz", "V"];
    const timeSlots = Array.from({ length: 10 }, (_, i) => i + 7); // 7:00 to 16:00

    function generateTimeSlots() {
        const newSlots = [];
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + 1); // Start from Monday

        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            for (let hour = 7; hour < 17; hour++) {
                const slot = new Date(date);
                slot.setHours(hour, 0, 0, 0);
                if (slot > now) {
                    newSlots.push(slot.toISOString());
                }
            }
        }
        return newSlots;
    }

    function updateSlots() {
        slots = generateTimeSlots();
    }

    let intervalId: string | number | NodeJS.Timeout | undefined;

    onMount(() => {
        updateSlots();
        intervalId = setInterval(updateSlots, 60000); // Update every minute
    });

    onDestroy(() => {
        if (intervalId) clearInterval(intervalId);
    });

    function handleSubmit() {
        if (selectedSlot && selectedColleague) {
            bookedAppointments = [
                ...bookedAppointments,
                {
                    appointment_time: selectedSlot,
                    melinda: selectedColleague,
                    name: "Beni",
                    weeks: 4,
                    email: "fsafsa@asd.com",
                    phone: "+3684738924",
                },
            ];
            alert(
                `Appointment booked with ${selectedColleague} on ${selectedSlot}`,
            );
            selectedSlot = "";
            selectedColleague = "";
        } else {
            alert("Please select both a time slot and a colleague");
        }
    }

    function isSlotBooked(slot: string) {
        return bookedAppointments.some((app) => app.appointment_time === slot);
    }

    function getBookedColleague(slot: any) {
        const appointment = bookedAppointments.find(
            (app) => app.appointment_time === slot,
        );
        return appointment ? appointment.melinda : "";
    }

    function formatDate(isoString: string | number | Date) {
        const date = new Date(isoString);
        return date.toLocaleString("hu-HU", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    }

    function getSlotForDayAndTime(day: number, time: number) {
        return slots.find((slot) => {
            const date = new Date(slot);
            return date.getDay() === day && date.getHours() === time;
        });
    }
</script>

<main>
    <h1>Book an Appointment</h1>

    <form on:submit|preventDefault={handleSubmit} method="POST" action="?/book">
        <div class="select-group">
            <label for="slot">Válassz időpontot:</label>
            <select name="appointment_time" id="slot" bind:value={selectedSlot}>
                <option value="">Időpontok</option>
                {#each availableSlots as slot}
                    <option value={slot} disabled={isSlotBooked(slot)}>
                        {formatDate(slot)}
                        {isSlotBooked(slot) ? "(Booked)" : ""}
                    </option>
                {/each}
            </select>
        
            <label for="colleague">Válassz a kollégák közül:</label>
            <select
                name="melinda"
                id="colleague"
                bind:value={selectedColleague}
            >
                <option value="">Kollégáink</option>
                {#each colleagues as colleague}
                    <option value={colleague}>{colleague}</option>
                {/each}
            </select>
        </div>
<fieldset>

    <div>
        <label for="name">Add meg kérlek a teljes neved</label>
        <input
        autocomplete="name"
        title="(Dr.) Vezetéknév Keresztnév Harmadiknév"
        pattern={reg_name}
        on:change={() => {
            validInputs.name = NameValidator(formInputs[0].value, formLabels[0]);
        }}
            type="text" name="name" />
        </div>
        <div>
            <label for="weeks">Hány hetes kismama vagy?</label>
            <input type="number" name="weeks" max="60" value="0"/>
        </div>
    </fieldset>
    <fieldset>

        <div>
            <label for="email">Add meg kérlek az email címed</label>
            <input type="email" name="email" pattern={reg_email}
            title="valami@valami.com"
            on:change={() => {
                validInputs.email = emailValidator(formInputs[1].value, formLabels[1]);
            }}
            />
        </div>
        <div>
            <label for="phone">Add meg kérlek a telefonszámod</label>
            <input type="tel" name="phone" pattern={reg_tel}
             title="+36***-***-****"
            on:change={() => {
                validInputs.tel = telephoneValidator(formInputs[2].value, formLabels[2]);
            }}
            />
        </div>
    </fieldset>
        <button disabled={!validInputs.name || !validInputs.email || !validInputs.tel || !selectedSlot || !selectedColleague} type="submit">Book Appointment</button>
    </form>

    <h2>Weekly Schedule</h2>
    <div class="schedule-container">
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    {#each daysOfWeek as day}
                        <th>{day}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each timeSlots as time}
                    <tr>
                        <td>{time}:00</td>
                        {#each daysOfWeek as _, index}
                            {@const slot = getSlotForDayAndTime(
                                index + 1,
                                time,
                            )}
                            <td>
                                {#if slot && isSlotBooked(slot)}
                                    <div
                                        class="booked-slot"
                                        title={`Booked by ${getBookedColleague(slot)}`}
                                    >
                                        Booked
                                    </div>
                                {/if}
                            </td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<style>
    .select-group{
        display: flex;
        gap: 2rem;
    }
    fieldset{
        display: flex;
        border: none;
        width: 55%;
        justify-content: space-between;
    }
    fieldset > div{
        width: 45%;
    }
    main {
        font-family: Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    form > div {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    select {
        width: 25%;
        padding: 5px;
    }

    button {
        background-color: #4caf50;
        color: white;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }
    button:disabled{
        background-color: gray;
        opacity: 0.5;
    }

    .schedule-container {
        width: 80%;
        margin: 20px auto;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
    }

    .booked-slot {
        background-color: #ffcccc;
        padding: 5px;
        border-radius: 4px;
        font-size: 0.8em;
    }
</style>
