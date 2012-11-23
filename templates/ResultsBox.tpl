{Template {
  $classpath : "addressBook.templates.ResultsBox",  
  $css : ["addressBook.templates.ResultsBoxCSS"]
}}

  {macro main()}
    
   <div class="content-box">
   	<div class="box-top center">
   		<h1 class="cian">Address Book</h1>   		
   	</div>
   	
   	<div class="box-middle center">
   		<h3 class="grey">Results</h3>
      <div class="results">
        <table class="result">
          <tbody>
            {foreach contact in data.results}
              <tr>
                <td class="datas">
                  ${contact.name} ${contact.surname} <br/>
                  ${contact.email} <br/>
                  Location: ${contact.office}
                </td>
                <td class="social">

                </td> 
              </tr>
            {/foreach}
          </tbody>
        </table>
      </div>
   	</div>

   	<div class="box-bottom center">
   		<button type="button" class="search-button" {on click {fn : "searchClicked"}/}><h2>New Search</h2></button>
   	</div>
   </div>

  {/macro}

{/Template}