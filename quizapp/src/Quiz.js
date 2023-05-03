import { useState } from "react"
import { useNavigate } from "react-router-dom"
import checkAns from "./checkAns";

export default function Quiz() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: ""
    })
    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        let res = checkAns(form);
        console.log(res);
        navigate('/result', { state: res })

    }
    return (
        <div className="container">
            <form onSubmit={submit}>
                <section>
                    <label htmlFor="q1">1.Capital of Rajasthan is </label><br />
                    a) Bhubaneswar<input checked={form.q1 === "Bhubaneswar"} onChange={handleInput} value="Bhubaneswar" id="q1" type="radio" name="q1" /><br />
                    b) Kolkata<input checked={form.q1 === "Kolkata"} onChange={handleInput} value="Kolkata" id="q1" type="radio" name="q1" /><br />
                    c) Jaipur<input checked={form.q1 === "Jaipur"} onChange={handleInput} value="Jaipur" id="q1" type="radio" name="q1" /><br />
                    d) Panaji<input checked={form.q1 === "Panaji"} onChange={handleInput} value="Panaji" id="q1" type="radio" name="q1" /><br />
                </section>
                <section>
                    <label htmlFor="q2">2.Capital of Himachal Pradesh </label><br />
                    a) Shimla<input checked={form.q2 === "Shimla"} onChange={handleInput} value="Shimla" id="q2" type="radio" name="q2" /><br />
                    b) Itanagar<input checked={form.q2 === "Itanagar"} onChange={handleInput} value="Itanagar" id="q2" type="radio" name="q2" /><br />
                    c) Ranchi<input checked={form.q2 === "Ranchi"} onChange={handleInput} value="Ranchi" id="q2" type="radio" name="q2" /><br />
                    d) Panaji<input checked={form.q2 === "Panaji"} onChange={handleInput} value="Panaji" id="q2" type="radio" name="q2" /><br />
                </section>
                <section>
                    <label htmlFor="q3">3.Capital of Arunachal Pradesh </label><br />
                    a) Shimla<input checked={form.q3 === "Shimla"} onChange={handleInput} value="Shimla" id="q3" type="radio" name="q3" /><br />
                    b) Itanagar<input checked={form.q3 === "Itanagar"} onChange={handleInput} value="Itanagar" id="q3" type="radio" name="q3" /><br />
                    c) Ranchi<input checked={form.q3 === "Ranchi"} onChange={handleInput} value="Ranchi" id="q3" type="radio" name="q3" /><br />
                    d) Panaji<input checked={form.q3 === "Panaji"} onChange={handleInput} value="Panaji" id="q3" type="radio" name="q3" /><br />
                </section>
                <section>
                    <label htmlFor="q4">4.Capital of Jharkhand </label><br />
                    a) Shimla<input checked={form.q4 === "Shimla"} onChange={handleInput} value="Shimla" id="q4" type="radio" name="q4" /><br />
                    b) Itanagar<input checked={form.q4 === "Itanagar"} onChange={handleInput} value="Itanagar" id="q4" type="radio" name="q4" /><br />
                    c) Ranchi<input checked={form.q4 === "Ranchi"} onChange={handleInput} value="Ranchi" id="q4" type="radio" name="q4" /><br />
                    d) Panaji<input checked={form.q4 === "Panaji"} onChange={handleInput} value="Panaji" id="q4" type="radio" name="q4" /><br />
                </section>
                <section>
                    <label htmlFor="q5">5.Capital of Assam </label><br />
                    a) Dispur<input checked={form.q5 === "Dispur"} onChange={handleInput} value="Dispur" id="q5" type="radio" name="q5" /><br />
                    b) Itanagar<input checked={form.q5 === "Itanagar"} onChange={handleInput} value="Itanagar" id="q5" type="radio" name="q5" /><br />
                    c) Ranchi<input checked={form.q5 === "Ranchi"} onChange={handleInput} value="Ranchi" id="q5" type="radio" name="q5" /><br />
                    d) Panaji<input checked={form.q5 === "Panaji"} onChange={handleInput} value="Panaji" id="q5" type="radio" name="q5" /><br />
                </section>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}