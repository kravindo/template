export function formatCurrency(amount) {
    const v = parseFloat(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return "Rp" + v
}

export function formatDate(d) {
    const date = new Date(d)
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if necessary
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()]; // Get month by index
    const year = date.getFullYear(); // Get full year
    const hours = String(date.getHours()).padStart(2, '0'); // Get hours in 24-hour format
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes

    return `${day} ${month} ${year} ${hours}:${minutes}`;
}