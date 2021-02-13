$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);
        $(".nav-item a").click(confirm);
        $("div a").click(showTab);
        $(".button").click(confirm);

        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show", "active");
        }
        function confirm(event){
            event.preventDefault();
            let size = $("input[name=size]:checked").val();
            let crust = $("input[name=crust]:checked").val();
            let meat = $("input[name=meat]:checked");
            let veggies = $("input[name=veggies]:checked");
            $("#final-size").text(`Size: ${size}`);
            $("#final-crust").text(`Crust: ${crust}`);

            let finalMeat = "";
            let subtotal = $("input[name=size]:checked").data("price");
            meat.each(function (){
                finalMeat += $(this).val()+", ";
                subtotal += $(this).data("price");
            });
            $("td#final-meat").text(`Meat: ${finalMeat}`);

            let finalVeggies = "";
            veggies.each(function (){
                finalVeggies += $(this).val()+", ";
                subtotal += $(this).data("price");
            });
            $("td#final-veggies").text(`Veggies: ${finalVeggies}`);
            $("td#subtotal").text(`$${subtotal.toFixed(2)}`);

            let estimatedTax = subtotal*.052;
            $("td#tax").text(`$${estimatedTax.toFixed(2)}`);

            let delivery = 2.00;
            $("td#delivery").text(`$${delivery.toFixed(2)}`);

            let totalAmount = subtotal + estimatedTax + delivery;
            $("td#total").text(`$${totalAmount.toFixed(2)}`);

            let fullName = $("input[name=fullname]").val();
            let address = $("input[name=address]").val();
            let city = $("input[name=city]").val();
            let state = $("input[name=state]").val();
            let zipcode = $("input[name=zipcode]").val();
            let country = $("select option:selected").val();
            let phone = $("input[name=phone]").val();

            $(".name").text(fullName);
            $("#street").text(address);
            $("#city-state").text(`${city}, ${state}, ${zipcode}`);
            $("#picked-country").text(country);
            $("#phone-number").text(phone);
        }
    });

//