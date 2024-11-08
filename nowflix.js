// Movie Booking JavaScript

let selectedSeats = [];
let totalPeople = 1;
let ticketPrice = 10; // Price per ticket

function bookMovie(movieName) {
    // Show booking section and update movie name
    document.getElementById('movie-name').textContent = movieName;
    document.getElementById('booking-section').style.display = 'block';
}

function watchNow(movieName) {
    alert(`Redirecting to stream ${movieName}...`);
    // Redirect to the watch page (for now, we can just show an alert)
}

function selectSeat(seatButton) {
    const seat = seatButton.textContent;
    const index = selectedSeats.indexOf(seat);

    if (index === -1) {
        // Seat is not selected, so select it
        selectedSeats.push(seat);
        seatButton.classList.add('selected');
    } else {
        // Seat is already selected, so deselect it
        selectedSeats.splice(index, 1);
        seatButton.classList.remove('selected');
    }

    updatePrice();
}

function increasePeople() {
    totalPeople++;
    document.getElementById('people-count').textContent = totalPeople;
    updatePrice();
}

function decreasePeople() {
    if (totalPeople > 1) {
        totalPeople--;
        document.getElementById('people-count').textContent = totalPeople;
        updatePrice();
    }
}

function updatePrice() {
    const totalAmount = selectedSeats.length * ticketPrice * totalPeople;
    document.getElementById('total-amount').textContent = totalAmount;
}

function payBill() {
    const totalAmount = selectedSeats.length * ticketPrice * totalPeople;
    if (selectedSeats.length > 0 && totalAmount > 0) {
        alert(`Total payment of $${totalAmount} completed. Enjoy your movie!`);
        // Reset booking after payment
        selectedSeats = [];
        document.getElementById('booking-section').style.display = 'none';
    } else {
        alert('Please select seats before proceeding to payment.');
    }
}
// JavaScript functions to navigate to the movie booking or watching page

function bookMovie(moviePage) {
    // Redirect to the movie booking page
    window.location.href = moviePage;
}

function watchNow(moviePage) {
    // Redirect to the movie watching page
    window.location.href = moviePage;
}
