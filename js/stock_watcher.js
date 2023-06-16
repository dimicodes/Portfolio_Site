async function showMostRecentTransaction() {
    try {
      // fetches the JSON data
      const response = await fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json');
      const data = await response.json();
  
      // sorts the stock transactions by disclosure_date in descending order
      data.sort((a, b) => {
        const dateA = new Date(a.disclosure_date);
        const dateB = new Date(b.disclosure_date);
        return dateB - dateA;
      });

      // gets the most recent transaction
      const mostRecentTransaction = data[0];
  
      // extracts the information from most recent transaction
      const disclosureDate = mostRecentTransaction.disclosure_date;
      const type = mostRecentTransaction.type;
      const amount = mostRecentTransaction.amount;
      const ticker = mostRecentTransaction.ticker;
      const rep = mostRecentTransaction.representative;
      const state = mostRecentTransaction.state;

  
    // updates the content of the <h2> element with id "stock"
    const stockElement = document.getElementById("stock");
    stockElement.innerHTML = `
    <span style="font-weight: bold; color: #71a276;">REPRESENTATIVE:</span> <span style="font-size: 0.8em;">${rep}</span><br>
    <span style="font-weight: bold; color: #71a276;">DISCLOSURE DATE:</span> <span style="font-size: 0.8em;">${disclosureDate}</span><br>
    <span style="font-weight: bold; color: #71a276;">TRANSACTION:</span> <span style="font-size: 0.8em;">${type}</span><br>
    <span style="font-weight: bold; color: #71a276;">AMOUNT:</span> <span style="font-size: 0.8em;">${amount}</span><br>
    <span style="font-weight: bold; color: #71a276;">STOCK:</span> <span style="font-size: 0.8em;">${ticker}</span>
  `;  
  } catch (error) {
    console.error('Error:', error);
  }
}

showMostRecentTransaction();