class Contact
{
    constructor(...params)
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNo = params[6]
        this.email = params[7]
    }

    get firstName(){ return this._firstName }
    set firstName(firstName)
    {
        let f_nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(f_nameRegex.test(firstName))
            this._firstName = firstName
        else throw 'Invalid FirstName'
    }
    get lastName(){ return this._lastName }
    set lastName(lastName)
    {
        let l_nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(l_nameRegex.test(lastName))
            this._lastName = lastName
        else throw 'Invalid Lastname'
    }
    get address(){ return this._address }
    set address(address)
    {
        let addressRegex = RegExp('^[a-zA-Z]{4,}$')
        if(addressRegex.test(address))
            this._address = address
        else throw 'Invalid Address'
    }
    get city(){ return this._city }
    set city(city)
    {
        let cityRegex = RegExp('^[a-zA-Z]{4,}$')
        if(cityRegex.test(city))
            this._city = city
        else throw 'Invalid City'
    }
    get state(){ return this._state }
    set state(state)
    {
        let stateRegex = RegExp('^[a-zA-Z]{4,}$')
        if(stateRegex.test(state))
            this._state = state
        else throw 'Invalid State'
    }
    get zip(){ return this._zip }
    set zip(zip)
    {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip
        else throw 'Invalid Zip Code'
    }
    get phoneNo(){ return this._phoneNo }
    set phoneNo(phoneNo)
    {
        let phoneRegex = RegExp('^[0-9]{2}[\\s][1-9][0-9]{9}$')
        if(phoneRegex.test(phoneNo))
            this._phoneNo= phoneNo
        else throw "Invalid PhoneNo"
        }
    get email(){ return this._email }
    set email(email)
    {
        let emailRegex = RegExp("^[0-9a-zA-Z]+([._-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$")
        if(emailRegex.test(email))
            this._email = email
        else throw 'Invalid Email'
        }

    toString()
    {
        return "FirstName: "+this.firstName+ ", LastName: "+this.lastName+ ", Address: "+this.address+ ", City: "+this.city+
                ", State: "+this.state+ ", Zip: "+this.zip+ ", PhoneNo: "+this.phoneNo+ ", Email: "+this.email;
    }
}
try
{
    let personContact = new Contact('Meban', 'Nongrum', 'Amjajer', 'Shillong', 'Meghalaya', 234343, '91 2435343876', 'nongrum@gmail.com')
    console.log(personContact.toString())
}
catch(e)
{
    console.error(e)
}
