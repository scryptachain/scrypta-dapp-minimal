document.getElementById('create').onclick = async function(){
    var wallet = await window.ScryptaCore.createAddress('dodododo')
    document.getElementById('result').innerHTML = JSON.stringify(wallet)
}