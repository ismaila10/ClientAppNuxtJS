export default function({store, redirect}){
    //const auth = false;
    if(!store.state.auth){
        return redirect('login')
    }
}