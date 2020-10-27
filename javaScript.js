let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function()
{
    $.get(url,function(data, status)
    {
        if (status == "success")
        {
            menu_items = data.menu_items;
            console.log(menu_items.length);
            for (const key in data.menu_items) 
            {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#restaurant').appendChild(opt);
                //console.log(key, data.menu_items[key].name);
            }
            showoptions();
        }
       
    });

    function showoptions()
    {
        let i=0;
        if(menu_items != null)
        {
            for(const jsonobj of menu_items)
            {
                console.log(i++, jsonobj.name);
            }
        }
    }

    
document.querySelector("#restaurant").addEventListener("change",showdetails);

function showdetails(e)
    {
    let index = e.target.value;
    
    if(menu_items != null)
    {
        let x = menu_items[index];
        let pricesmall = x.price_small;
        
        if(pricesmall == null)
        {
            pricesmall = "Not Available";
        }
        
        let descrp = x.description;
        if(descrp == "")
        
        {
            descrp = "Description is not available";
        }
        
        let small = x.small_portion_name;
        if(small == null)
        {
            small = "Not Available";
        }
        let large = x.large_portion_name;
        if(large == null)
        {
            large = "Not Available";
        }
        document.querySelector("#name").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#s_name").textContent = x.short_name;
        document.querySelector("#descpt").textContent = descrp;
        document.querySelector("#p_small").textContent = pricesmall;
        document.querySelector("#p_large").textContent = x.price_large;
        document.querySelector("#small_name").textContent = small;
        document.querySelector("#large_name").textContent = large;
    }
    document.getElementById("tabl").style.display = "block";
}


});