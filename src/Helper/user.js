

useEffect(() => {
    const fetchData = async () => {
    fetch('https://randomuser.me/api/?results=100')
    .then((response) => response.json())
    .then((data) => console.log(data))
    };
    fetchData();
  },[])