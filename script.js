let flights = [];
// flights = [
//     {source: "Lagos", destination: "Abuja", date: "24/10/2024", user: "amaka"},
//     {source: "Lagos", destination: "Abuja", date: "24/10/2024", user: "esty"},
//     {source: "New York", destination: "London", date: "25/10/2024", user: "will"},
//     {source: "Tokyo", destination: "San Francisco", date: "26/10/2024", user: "Favour"}
// ];

/*I. A function that adds single day trips*/
let continueAdding;

do {
    let flightSource = prompt(`What is your departure airport?`, `Lagos`);
    let flightDestination = prompt(`Where is your destination?`, `Abuja`);
    let flightDate = prompt(`Departure date?`, `24/10/2024`);
    let userName = prompt(`What is your name?`, `amaka`);

    if (flightSource !== null && flightDestination !== null && flightDate !== null && userName !== null) {
        addTrip(flightSource, flightDestination, flightDate, userName);
    }

    continueAdding = prompt(`Do you want to add another flight? (yes/no)`, `yes`);
    if (!continueAdding || continueAdding === "no") break;
} while (continueAdding === `yes` );

function addTrip(source, destination, date, user) {
    const trip = {
        source: source,
        destination: destination,
        date: date,
        user: user
    };

    flights.push(trip);
    console.log(`Trip added: ${JSON.stringify(trip)}`);
    console.log(flights);
};

/*II. Function that allows customer to book a flight by specifying the source and destination.*/
let flightSource = prompt(`Departure airport`, `Lagos`);
let flightDestination = prompt(`Destination`, `Abuja`);
let flightDate = prompt(`Departure date`, `24/10/2024`);
let userName = prompt(`What is your name?`, `amaka`);

function bookTrip(source, destination, date, user) {
    flights.push({source, destination, date, user});
    console.log(`${user}, your flight from ${source} to ${destination} on ${date} has been booked`);
    alert(`${user}, your flight from ${source} to ${destination} on ${date} has been booked`);
    console.log(flights);
}

bookTrip(flightSource, flightDestination, flightDate, userName);

/*III. A function that allows customers to cancel existing booked flights*/
function cancelFlight() {
    let flightNumber = prompt(`Enter the flight number you want to cancel (1, 2, 3):`, `1`);

    if (flightNumber !== null) {
        flightNumber = parseInt(flightNumber, 10) - 1;
        if (flightNumber >= 0 && flightNumber < flights.length) {
            let confirmed = confirm(`Are you sure you want to cancel your flight from ${flights[flightNumber].source} to ${flights[flightNumber].destination} on ${flights[flightNumber].date}?`);
            if (confirmed) {

                console.log(`${flights[flightNumber].user}, your flight from ${flights[flightNumber].source} to ${flights[flightNumber].destination} on ${flights[flightNumber].date} has been cancelled.`);

                alert(`${flights[flightNumber].user}, your flight from ${flights[flightNumber].source} to ${flights[flightNumber].destination} on ${flights[flightNumber].date} has been cancelled.`);
                flights.splice(flightNumber, 1);
				console.log(flights);

            } else {
                alert(`Flight cancellation aborted.`);
            }
        } else {
            alert(`Invalid flight number. Please try again.`);
        }
    } else {
        alert(`No flight number provided. Cancellation aborted.`);
    }
}

cancelFlight();

/*IV. Function that allows customer to monitor their itinerary*/
function monitorItinerary() {
    let userName = prompt(`Enter your full name to check your itinerary:`, `amaka`);
    if (userName !== null) {
        userName = userName.toLowerCase();

        let userFlights = flights.filter(flight => flight.user && flight.user.toLowerCase() === userName);

        if (userFlights.length > 0) {
            console.log(`Flights booked by ${userName}:`);
            userFlights.forEach((flight, index) => {
                // console.log(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
                alert(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
            });
        } else {
            alert(`No itinerary found for this name.`);
        }
    } else {
        alert(`Input was cancelled.`);
    }
}

monitorItinerary();

/*V. Function that allows customers to filter flights using specific criteria*/
function filterFlights() {
    let filterOption = prompt("Choose a filter option:\n1. By Date\n2. By Flight Source\n3. By Destination\n4. By User Name", "1");

    switch (filterOption) {
        case "1":
            let filterDate = prompt("Enter the date to filter flights by (format: DD/MM/YYYY)", "24/10/2024").toLowerCase();
            let filteredFlights = flights.filter(flight => flight.date.toLowerCase() === filterDate);
            if (filteredFlights.length > 0) {
                filteredFlights.forEach((flight, index) => {
                    console.log(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
                });
            } else {
                alert(`No flights found for the date ${filterDate}.`);
            }
            break;
        case "2":
            let filterSource = prompt("Enter the Source to filter flights by:", "Lagos").toLowerCase();
            let filteredFlightsBySource = flights.filter(flight => flight.source.toLowerCase() === filterSource);
            if (filteredFlightsBySource.length > 0) {
                console.log(`Flights from ${filterSource}:`);
                filteredFlightsBySource.forEach((flight, index) => {
                    console.log(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
                });
            } else {
                alert(`No flights found from the source ${filterSource}.`);
            }
            break;
        case "3":
            let filterDestination = prompt("Enter the destination to filter flights by:", "Abuja").toLowerCase();
            let filteredFlightsByDestination = flights.filter(flight => flight.destination.toLowerCase() === filterDestination);
            if (filteredFlightsByDestination.length > 0) {
                console.log(`Flights to ${filterDestination}:`);
                filteredFlightsByDestination.forEach((flight, index) => {
                    console.log(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
                });
            } else {
                alert(`No flights found to the destination ${filterDestination}.`);
            }
            break;
        case "4":
            let filterUserName = prompt("Enter the user name to filter flights by:", "amaka").toLowerCase();
            let filteredFlightsByUser = flights.filter(flight => flight.user.toLowerCase() === filterUserName);
            if (filteredFlightsByUser.length > 0) {
                console.log(`Flights booked by ${filterUserName}:`);
                filteredFlightsByUser.forEach((flight, index) => {
                    console.log(`Flight ${index + 1}: ${flight.source} to ${flight.destination} on ${flight.date}, booked by ${flight.user}`);
                });
            } else {
                alert(`No flights found booked by the user ${filterUserName}.`);
            }
            break;
        default:
            alert("Invalid filter option selected. Please try again.");
    }
}

filterFlights();