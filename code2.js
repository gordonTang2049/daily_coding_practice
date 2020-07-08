const group = {
    A: 20, 
    B: 15, 
    C: 10

}

function balOfGroup(groupBalance){
    return Object.values(groupBalance)
}

function avgBal(total, group){
    return total / Object.keys(group).length
}

function total(values){
    let total =
        values
        .reduce((total, i) => { return total + i})

        return total
} 

function splitTheBill(groupBalance){
    let values = balOfGroup(groupBalance)
    let totalbal = total(values)
    let avgBalance = avgBal(totalbal, groupBalance)

    let splitBills = Object.fromEntries(
        Object.entries(groupBalance)
        .map(([ key, val ]) => [ key, val-avgBalance ])
        );
    return splitBills
}



console.log(splitTheBill(group)) 



