import { useState } from "react";

type Status = 'success' | 'typing' | 'submitting';
function Form(){
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<Status>('typing');
  const [error, setError] = useState<Error | null>(null);
  const handleTextareaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    
  }

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    setStatus('submitting');
    try{
      await submitForm(answer);
      setStatus('success')
    }catch(err){
      setStatus('typing')
      if(err instanceof Error){
        setError(err)
      }
    }
  }

  if(status === 'success'){
    return <h1>정답입니다~~~!</h1>
  }
  return(
    <form id="form">
      <h2>퀴즈!</h2>
      <p>좋아하는 계절?</p>
      <textarea id="textarea" onChange={handleTextareaChange} disabled={status ==='submitting'}></textarea>
      <br />
      <button type="submit" id="button" onClick={handleSubmit} disabled={answer.length === 0 || status ==='submitting'}>Submit</button>
      {error !== null && <p style={{color:'red'}}>{error.message}</p>}
      {status === 'submitting'&&<p>loading...</p>}
    </form>
  )
}
export default Form;


const submitForm = (answer:string):Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(answer.toLowerCase() === '가을'){
        resolve('👍');
      }else{
        reject(new Error('땡! 너는 이미 정답을 알고있다.'));
      }
    }, 1500);
  })
}