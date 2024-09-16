<script lang="ts">
    import Base from "$lib/components/appointment/base.svelte";
    import NewAppointment from "$lib/components/forms/new_appointment.svelte";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
</script>

<Base />
<NewAppointment booked_appointments={data.booked_appointments} available_appointments={data.appointment_times}/>