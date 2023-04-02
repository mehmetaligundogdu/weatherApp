import React,{useState} from 'react'

function Search({resultWeather}) {
  const [parameter, setParameter] = useState('');
  const api = {
    key: "5e3ad836ee1375863317e9f300357c69",
    base: 'https://api.openweathermap.org/data/2.5/weather'
  }

    const search = e => {
        if (e.key === 'Enter') {
            fetch(`${api.base}?q=${parameter}&units=metric&lang=tr&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setParameter('');
                resultWeather(result);
            })
        }
    }
  return (
        <div className='search'>
           <input
             className='search-bar'
             type='text' 
             placeholder='Şehir Adı Giriniz'
             onChange={e => setParameter(e.target.value)}
             value={parameter}
             onKeyPress={search}
            >
           </input>
        </div>
  )
}

export default Search;