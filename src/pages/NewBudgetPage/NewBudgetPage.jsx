export default function NewBudgetPage() {

    async function handleSubmit(evt) {
        evt.preventDefault();
       
    }
   
    return (
        <main>
            <h1>Add New Budget</h1>
            <h2>Existing Budgets</h2>
            <hr />
            <h2>Enter Budget Information</h2>
            <form onSubmit={handleSubmit}></form>
        </main>
    );
}