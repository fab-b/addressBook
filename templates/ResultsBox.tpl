{Template {
  $classpath : "addressBook.templates.ResultsBox",
  $hasScript : true,
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
                  <div class="icons">
                    <div class="fb-box">
                      {if contact.facebook}
                        <a class="social-link-fb"></a>
                      {else/}
                        <img src="./templates/imgs/facebook16.png">
                      {/if}
                    </div>
                    <div class="tw-box">
                      {if contact.twitter}
                        <a class="social-link-tw"></a>
                      {else/}
                        <img src="./templates/imgs/twitter16.png">
                      {/if}
                    </div>
                    <div class="lin-box">
                      {if contact.linkedin}
                        <a class="social-link-lin"></a>
                      {else/}
                        <img src="./templates/imgs/linkedin16.png">
                      {/if}
                    </div>
                    <div class="fli-box">
                      {if contact.flickr}
                        <a class="social-link-fli"></a>
                      {else/}
                        <img src="./templates/imgs/flickr16.png">
                      {/if}
                    </div>
                  </div>
                </td> 
              </tr>
            {/foreach}
          </tbody>
        </table>
      </div>
   	</div>

   	<div class="box-bottom center">
   		<button type="button" class="search-button" {on click {fn : "newSearchClicked"}/}><h2>New Search</h2></button>
   	</div>
   </div>

  {/macro}

{/Template}