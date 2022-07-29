const body = $(document.body);
const jobsDiv = $('.jobs');
const houselike = $("#houselike");
const tall = $("#tall");
const happy = $("#happy");
const contactsDiv = $('.contacts');

// listen for click on jobsite 

houselike.click(() => {
    $.get(`/workers`, (data) => {
        console.log(data);

        data.forEach(worker => {
            console.log(worker.worker_name);

            const { worker_name, age, specialty, pay } = worker;
            houselike.append(
                `<div class="workers">
                    <h3 class="name"> Name: ${worker_name} </h3>
                    <h4 class="age"> Age: ${age} </h3>
                    <h4 class="specialty"> Specialty: ${specialty} </h3>
                    <h4 class="pay"> Pay: ${pay} </h3>
                </div>`
            );
        });
    });
});