

//대상 찾기
const container = document.getElementById('imperative-programming')!;
const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement

function handleChange(e:Event){
    const {checked} = e.target as HTMLInputElement;
    if(checked){
        button.removeAttribute('disabled');
        button.textContent = '활성 상태'
    }else{
        button.setAttribute('disabled', String(true));
        button.textContent = '비활성 상태'
    }
}
checkbox.addEventListener('change', handleChange);