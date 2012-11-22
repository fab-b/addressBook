{Template {
  $classpath : "addressBook.templates.MainLayout",
  $hasScript : true,
  $css : ["addressBook.templates.HomeBodyCSS"]
}}

  {macro main()}
   <div class="container"> 
   	{@embed:Placeholder {
    	name : "searchBox"
    }/}
   </div>
  {/macro}

{/Template}