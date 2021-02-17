import React from 'react';


class Working extends React.Component {

    constructor() {
        super();
        this.state = {
            Income: 0,
            Expence: 0,
            Balance: 0,
            MyHistory: [
            ],
            Type: "",
            Title: "",
            Amount: ""
        }



    }



    ClaculateData() {

        if (this.state.Amount != 0) {
            if (this.state.Type === "INCOME") {
                this.setState({
                    Income: this.state.Income + Number(this.state.Amount),
                    Balance: (this.state.Income + Number(this.state.Amount)) - this.state.Expence,
                    MyHistory: [...this.state.MyHistory, {
                        Title: this.state.Title,
                        Amount: this.state.Amount,
                        Type: "INC",
                    }]
                })
            }
            else if (this.state.Type === "EXPENCE") {
                this.setState({
                    Expence: this.state.Expence + Number(this.state.Amount),
                    Balance: this.state.Income - (this.state.Expence + Number(this.state.Amount)),
                    MyHistory: [...this.state.MyHistory, {
                        Title: this.state.Title,
                        Amount: this.state.Amount,
                        Type: "EXP",
                    }]
                })
            }
            else {
                alert("Please Select Type Expence / Income")
            }
        }
        else {
            alert("Please Fill All Data")
        }


    }

    render() {


        return (
            <div className="mainDiv" >
                <h1>Expence Tracker</h1>

                <h3>YOUR BALANCE</h3>
                <h1 className="balanceAmount" >$ {this.state.Balance}</h1>

                <div className="Exp_Income" >
                    <div>
                        <span>INCOME</span><br />
                        <span className="expence" >{this.state.Income}</span>
                    </div>
                    <br />

                    <div>
                        <span>EXPENCE</span><br />
                        <span className="income">{this.state.Expence}</span>
                    </div>
                </div>

                <h3>History</h3>
                <div>
                    <ul>
                        {
                            this.state.MyHistory.map((val) => {
                                return (
                                    <li>
                                        {val.Title}({val.Type}) {"=>"} {val.Amount}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <h3>Add New Transaction</h3>
<div className="myRadio" >
                <label>
                    <input type="radio" name="type" onChange={(e) => this.setState({ Type: e.target.value })} value="INCOME" />
INCOME
</label>
                <label>
                    <input type="radio" name="type" onChange={(e) => this.setState({ Type: e.target.value })} value="EXPENCE" />
EXPENCE
</label>
</div>
                <label className="myLabel" >Title <br />
                    <input type="text" className="myInput" value={this.state.Title} onChange={(e) => this.setState({ Title: e.target.value })} />
                </label>
                <br />
                <label className="myLabel">Amount <br />
                    <input type="Number" className="myInput" value={this.state.Amount} onChange={(e) => this.setState({ Amount: e.target.value })} />
                </label> <br />
                <button onClick={() => this.ClaculateData()} >Add Transaction</button>


            </div>
        )
    }

}


export default Working;