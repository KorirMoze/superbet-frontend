// class Bet {
//     constructor(event, selection, odds) {
//       this.event = event;
//       this.selection = selection;
//       this.odds = odds;
//     }
//   }
  
//   class BetSlip {
//     constructor() {
//       this.bets = [];
//     }
  
//     add_to_betslip(bet) {
//       if (bet instanceof Bet) {
//         this.bets.push(bet);
//         console.log("Bet added successfully.");
//       } else {
//         console.log("Invalid bet. Please provide a Bet object.");
//       }
//     }
  
//     remove_from_betslip(bet) {
//       const index = this.bets.indexOf(bet);
//       if (index > -1) {
//         this.bets.splice(index, 1);
//         console.log("Bet removed successfully.");
//       } else {
//         console.log("Bet not found in betslip.");
//       }
//     }
  
//     calculate_total_odds() {
//       let total_odds = 1;
//       for (let i = 0; i < this.bets.length; i++) {
//         total_odds *= this.bets[i].odds;
//       }
//       return total_odds;
//     }
  
//     calculate_potential_payout(stake) {
//       const total_odds = this.calculate_total_odds();
//       const potential_payout = total_odds * stake;
//       return potential_payout;
//     }
//   }
  
//   // Example usage:
//   const bet1 = new Bet("Football", "Manchester United", 1.5);
//   const bet2 = new Bet("Basketball", "Los Angeles Lakers", 2.0);
//   const betslip = new BetSlip();
//   betslip.add_to_betslip(bet1);
//   betslip.add_to_betslip(bet2);
//   console.log(betslip.calculate_total_odds());
//   console.log(betslip.calculate_potential_payout(10));
//   betslip.remove_from_betslip(bet2);
//   console.log(betslip.bets);
  