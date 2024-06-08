document.addEventListener("DOMContentLoaded", function () {
    const partyForm = document.getElementById("party-form");
    const partyList = document.getElementById("party-list");

    function addParty(name, date, time, location, description) {
        const partyItem = document.createElement("li");
        partyItem.innerHTML = `
            <strong>${name}</strong> - ${date}, ${time}, ${location}<br>
            ${description}
            <button class="delete-btn">Delete</button>
        `;
        partyList.appendChild(partyItem);

        const deleteButton = partyItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            partyList.removeChild(partyItem);
        });
    }

    partyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const location = document.getElementById("location").value;
        const description = document.getElementById("description").value;

        addParty(name, date, time, location, description);

        partyForm.reset();
    });
});
