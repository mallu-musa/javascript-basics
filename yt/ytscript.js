function searchmn(){
    const sea=document.getElementById("search").value;
    window.location.href=`https://www.youtube.com/results?search_query=${encodeURIComponent(sea)}`;
}