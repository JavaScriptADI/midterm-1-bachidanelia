/*3.Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

function getCurrentDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getUTCFullYear();
    console.log(`${day}-${month + 1}-${year}`);
    console.log(now);
};

getCurrentDate(); // dd-mm-yyyy