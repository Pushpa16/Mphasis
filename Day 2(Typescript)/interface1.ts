interface I_department{
    did:number;
    name:string;
}
interface I_employee extends I_department{
    id:number;
    name:string;
    m_id:number;
    dept_id:number;

}
class Employee implements I_employee{
    constructor(public id:number,public name:string, public m_id:number,public dept_id:number,public did:number)
    {   this.id=id;
        this.name=name;
        this.m_id=m_id;
        this.dept_id=dept_id;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name}, Manager_id:${this.m_id}, Department_id:${this.dept_id}`)
    }
}
class Manager implements I_employee{
    constructor(public id:number,public name:string, public m_id:number,public dept_id:number,public did:number)
    {   this.id=id;
        this.name=name;
        this.m_id=m_id;
        this.dept_id=dept_id;
    }
    getDetails():void{
        console.log(`ID: ${this.id}, name:${this.name}, Manager_id:${this.m_id}, Department_id:${this.dept_id}`)
    }
}
class Department implements I_department{
    constructor(public did:number, public name:string)
    {
        this.did=did;
        this.name=name;
    }
    
}
const emp= new Employee(1, 'pushpa',2,3,4);

console.log(emp);