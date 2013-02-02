	
document.write('<link rel="stylesheet" href="http://code.bildr.org/includes/style/rendered.css"/>');
document.write('<link rel="stylesheet" href="http://code.bildr.org/includes/style/geshi.css"/>');
document.write('<div class=\"bildrCode_projectWrapper test\" id=\"bildrCode_projectWrapper_84\" ><div class=\"bildrCode_projectHeader\" ><span class=\"bildrCode_projectTitle\"><a href=\"http://code.bildr.org/project/Single 7-Segment Display\"> Single 7-Segment Display </a><span class=\"bildrCode_expand\"></span></span></div><div class=\"bildrCode_module\"><div class=\"bildrCode_moduleSideBar\" id=\"bildrCode_moduleSideBar_84\"><div class=\"bildrCode_moduleBody\"><span id=\"bildrCode_moduleFileBar147\" class=\"bildrCode_moduleHead\"><span class=\"folder\"></span><span class=\"text\">Arduino</span><a class=\"wikisideMenuDownloadButton\" title=\"download code\" href=\"http://code.bildr.org/download/625.zip\">download</a></span><div  class=\"bildrCode_moduleFileBarTest\"><span class=\"shadow\"></span><li class=\"sub1 file\"><a class=\"genericFile\" rel=\"3406\" href=\"#\" >License.txt</a></li><li class=\"sub1 file\"><a class=\"genericFile\" rel=\"3405\" href=\"#\" >Read_Me.txt</a></li><li class=\"sub1 file\"><a class=\"genericFile\" rel=\"3407\" href=\"#\" >singledigit.pde</a></li></div></div></div><div class=\"bildrCode_moduleCode\" id=\"bildrCode_moduleCode_84\"><div class=\"bildrCode_codeWrapper\"><div class=\"bildrCode_fileWrapper\" id=\"bildrCode_3406\"><p class=\"bildrCode_fileHead\"><span class=\"shadow\"></span>License.txt - Text</p> <div class=\"bildrCode_fileCodeWrapper\"><div class=\"bildrCode_lineNumbers\">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20<br /></div><div class=\"bildrCode_code\"><code>Copyright (c) 2010 bildr community<br /><br />Permission is hereby granted, free of charge, to any person obtaining a copy<br />of this software and associated documentation files (the &quot;Software&quot;), to deal<br />in the Software without restriction, including without limitation the rights<br />to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />copies of the Software, and to permit persons to whom the Software is<br />furnished to do so, subject to the following conditions:<br /><br />The above copyright notice and this permission notice shall be included in<br />all copies or substantial portions of the Software.<br /><br />THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN<br />THE SOFTWARE.</code></div></div></div><div class=\"bildrCode_fileWrapper\" id=\"bildrCode_3405\"><p class=\"bildrCode_fileHead\"><span class=\"shadow\"></span>Read_Me.txt - Text</p> <div class=\"bildrCode_fileCodeWrapper\"><div class=\"bildrCode_lineNumbers\">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br /></div><div class=\"bildrCode_code\"><code></code></div></div></div><div class=\"bildrCode_fileWrapper\" id=\"bildrCode_3407\"><p class=\"bildrCode_fileHead\"><span class=\"shadow\"></span>singledigit.pde - Arduino</p> <div class=\"bildrCode_fileCodeWrapper\"><div class=\"bildrCode_lineNumbers\">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20<br />21<br />22<br />23<br />24<br />25<br />26<br />27<br />28<br />29<br />30<br />31<br />32<br />33<br />34<br />35<br />36<br />37<br />38<br />39<br />40<br />41<br />42<br />43<br />44<br />45<br />46<br />47<br />48<br />49<br />50<br />51<br />52<br />53<br />54<br />55<br />56<br />57<br />58<br />59<br />60<br />61<br />62<br />63<br />64<br />65<br />66<br />67<br />68<br />69<br />70<br />71<br />72<br />73<br />74<br />75<br />76<br />77<br />78<br />79<br />80<br />81<br />82<br />83<br />84<br />85<br />86<br />87<br />88<br />89<br />90<br />91<br />92<br />93<br />94<br /></div><div class=\"bildrCode_code\"><code><span class=\"co1\">//****************************************************************</span><br /><span class=\"co1\">//</span><br /><span class=\"co1\">// Code to demonstrate using an Arduino and 74HC595 to control</span><br /><span class=\"co1\">// a 7-segment LED</span><br /><span class=\"co1\">//</span><br /><span class=\"co1\">// Datasheets available from:</span><br /><span class=\"co1\">//  http://www.sparkfun.com/datasheets/Components/YSD-160AR4B-8.pdf</span><br /><span class=\"co1\">//  http://www.sparkfun.com/datasheets/IC/SN74HC595.pdf</span><br /><span class=\"co1\">//</span><br /><span class=\"co1\">// Written By:</span><br /><span class=\"co1\">//  K-MOB</span><br /><span class=\"co1\">//  for Bildr</span><br /><span class=\"co1\">//  10/2/2010</span><br /><span class=\"co1\">//</span><br /><span class=\"co1\">//****************************************************************</span><br /><span class=\"coMULTI\">/*<br /><br /> ___F___<br /> |   |<br />G |   | E<br /> | H |<br /> -------<br /> |   |<br />A |   | C<br /> |   |<br /> ------- . D<br />  B<br />  <br />Binary display out, bit by bit:<br />ABCD EFGH<br />*/</span><br /><br /><span class=\"co1\">// Pin connected to RCLK -- storage register clock pin (latch pin) -- of 74HC595</span><br /><span class=\"kw4\">const</span> <span class=\"kw4\">int</span> RCLKPin <span class=\"sy0\">=</span> <span class=\"nu0\">3</span><span class=\"sy0\">;</span><br /><span class=\"co1\">// Pin connected to SRCLK -- shift register clock pin -- of 74HC595</span><br /><span class=\"kw4\">const</span> <span class=\"kw4\">int</span> SRCLKPin <span class=\"sy0\">=</span> <span class=\"nu0\">7</span><span class=\"sy0\">;</span><br /><span class=\"co1\">// Pin connected to SER -- serial data input -- of 74HC595</span><br /><span class=\"kw4\">const</span> <span class=\"kw4\">int</span> SERPin <span class=\"sy0\">=</span> <span class=\"nu0\">6</span><span class=\"sy0\">;</span><br /><br /><span class=\"kw4\">const</span> String display_chars <span class=\"sy0\">=</span> <span class=\"st0\">&quot;0123456789ABCDEF&quot;</span><span class=\"sy0\">;</span><br /><br /><span class=\"co1\">// note that setting a pin to low makes its respective LED segment light</span><br /><span class=\"co1\">// up (because it\'s already getting +5V from the middle pin of the display)</span><br /><span class=\"co1\">// therfore a 0 bit represents an active, lit-up segment</span><br /><span class=\"kw4\">const</span> <span class=\"kw4\">int</span> sevenSeg<span class=\"br0\">&#91;</span><span class=\"nu0\">16</span><span class=\"br0\">&#93;</span> <span class=\"sy0\">=</span> <span class=\"br0\">&#123;</span><br /> <span class=\"nu12\">0x11</span><span class=\"sy0\">,</span> <span class=\"co1\">// 0 dec 0001 0001 bin</span><br /> <span class=\"nu12\">0xD7</span><span class=\"sy0\">,</span> <span class=\"co1\">// 1 dec 1101 0111 bin</span><br /> <span class=\"nu12\">0x32</span><span class=\"sy0\">,</span> <span class=\"co1\">// 2 dec 0011 0010 bin</span><br /> <span class=\"nu12\">0x92</span><span class=\"sy0\">,</span> <span class=\"co1\">// 3 dec 1001 0010 bin</span><br /> <span class=\"nu12\">0xD4</span><span class=\"sy0\">,</span> <span class=\"co1\">// 4 dec 1101 0100 bin</span><br /> <span class=\"nu12\">0x98</span><span class=\"sy0\">,</span> <span class=\"co1\">// 5 dec 1001 1000 bin</span><br /> <span class=\"nu12\">0x18</span><span class=\"sy0\">,</span> <span class=\"co1\">// 6 dec 0001 1000 bin</span><br /> <span class=\"nu12\">0xD3</span><span class=\"sy0\">,</span> <span class=\"co1\">// 7 dec 1101 0011 bin</span><br /> <span class=\"nu12\">0x10</span><span class=\"sy0\">,</span> <span class=\"co1\">// 8 dec 0001 0000 bin</span><br /> <span class=\"nu12\">0x90</span><span class=\"sy0\">,</span> <span class=\"co1\">// 9 dec 1001 0000 bin</span><br /> <span class=\"nu12\">0x50</span><span class=\"sy0\">,</span> <span class=\"co1\">// &quot;A&quot; dec 0101 0000 bin</span><br /> <span class=\"nu12\">0x1C</span><span class=\"sy0\">,</span> <span class=\"co1\">// &quot;b&quot; dec 0001 1100 bin</span><br /> <span class=\"nu12\">0x39</span><span class=\"sy0\">,</span> <span class=\"co1\">// &quot;C&quot; dec 0011 1001 bin</span><br /> <span class=\"nu12\">0x16</span><span class=\"sy0\">,</span> <span class=\"co1\">// &quot;d&quot; dec 0001 0110 bin</span><br /> <span class=\"nu12\">0x38</span><span class=\"sy0\">,</span> <span class=\"co1\">// &quot;E&quot; dec 0011 1000 bin</span><br /> <span class=\"nu12\">0x78</span> <span class=\"co1\">// &quot;F&quot; dec 0111 1000 bin</span><br /><span class=\"br0\">&#125;</span><span class=\"sy0\">;</span><br /> <br /><span class=\"kw4\">void</span> setup<span class=\"br0\">&#40;</span><span class=\"br0\">&#41;</span> <span class=\"br0\">&#123;</span><br /><br /> <span class=\"co1\">// set pins to output so you can control the shift register</span><br /> <span class=\"kw3\">pinMode</span><span class=\"br0\">&#40;</span>RCLKPin<span class=\"sy0\">,</span> <span class=\"kw2\">OUTPUT</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /> <span class=\"kw3\">pinMode</span><span class=\"br0\">&#40;</span>SRCLKPin<span class=\"sy0\">,</span> <span class=\"kw2\">OUTPUT</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /> <span class=\"kw3\">pinMode</span><span class=\"br0\">&#40;</span>SERPin<span class=\"sy0\">,</span> <span class=\"kw2\">OUTPUT</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /><br /><span class=\"br0\">&#125;</span><br /><br /><span class=\"kw4\">void</span> loop<span class=\"br0\">&#40;</span><span class=\"br0\">&#41;</span> <span class=\"br0\">&#123;</span><br /><br /><span class=\"kw1\">for</span> <span class=\"br0\">&#40;</span><span class=\"kw4\">int</span> whatToDisplay <span class=\"sy0\">=</span> <span class=\"nu0\">0</span><span class=\"sy0\">;</span> whatToDisplay <span class=\"sy0\">&lt;</span> <span class=\"nu0\">16</span><span class=\"sy0\">;</span> whatToDisplay<span class=\"sy0\">++</span><span class=\"br0\">&#41;</span> <span class=\"br0\">&#123;</span><br /><br />  <span class=\"co1\">// set RCLK low; wait till we transmit the byte, and they moving it high will output the data</span><br />  <span class=\"kw3\">digitalWrite</span><span class=\"br0\">&#40;</span>RCLKPin<span class=\"sy0\">,</span> <span class=\"kw2\">LOW</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /><br />  <span class=\"co1\">// shift out the bits (MSBFIRST = most significant bit first)</span><br />  <span class=\"kw3\">shiftOut</span><span class=\"br0\">&#40;</span>SERPin<span class=\"sy0\">,</span> SRCLKPin<span class=\"sy0\">,</span> MSBFIRST<span class=\"sy0\">,</span> charByte<span class=\"br0\">&#40;</span>display_chars<span class=\"br0\">&#91;</span>whatToDisplay<span class=\"br0\">&#93;</span><span class=\"br0\">&#41;</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /><br />  <span class=\"co1\">// send shift register data to the storage register</span><br />  <span class=\"kw3\">digitalWrite</span><span class=\"br0\">&#40;</span>RCLKPin<span class=\"sy0\">,</span> <span class=\"kw2\">HIGH</span><span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br />  <br />  <span class=\"co1\">// catch our breath before repeating</span><br />  <span class=\"kw3\">delay</span><span class=\"br0\">&#40;</span>1000<span class=\"br0\">&#41;</span><span class=\"sy0\">;</span><br /> <span class=\"br0\">&#125;</span><br /><span class=\"br0\">&#125;</span><br /><br /><span class=\"kw4\">int</span> charByte<span class=\"br0\">&#40;</span><span class=\"kw4\">char</span> charToDisplay<span class=\"br0\">&#41;</span> <span class=\"br0\">&#123;</span><br /> <span class=\"kw1\">return</span> sevenSeg<span class=\"br0\">&#91;</span>display_chars.<span class=\"me1\">indexOf</span><span class=\"br0\">&#40;</span>charToDisplay<span class=\"br0\">&#41;</span><span class=\"br0\">&#93;</span><span class=\"sy0\">;</span><br /><span class=\"br0\">&#125;</span></code></div></div></div></div></div></div><div class=\"bildrCode_footer\"></div></div>');



//-- this code must come after the insertion of the html

var fileScroll_84 = new Fx.Scroll('bildrCode_moduleCode_84', {link: 'cancel'});
var modScroll_84 = new Fx.Scroll('bildrCode_moduleSideBar_84', {link: 'cancel'});

var scrollEl = null;

$$('.bildrCode_fileCodeWrapper').addEvent('scroll', function(e){
   if(scrollEl == this) return;
   
   this.set('html',  ' '+this.get('html'));    
   this.set('html',  this.get('html').substr(1));
   scrollEl = this;
});

$$('.bildrCode_moduleSideBar')[0].getElement('.file').addClass('selected');


$$('.bildrCode_expand').addEvent('click', function(){
	var wrapper = this.getParent('.bildrCode_projectWrapper');
	
	if(wrapper.hasClass('expanded')){
		wrapper.removeClass('expanded');	
	}else{
		wrapper.addClass('expanded');	
	}
});


$('bildrCode_projectWrapper_84').addEvent('click:relay(.file)', function(e){
	e.stop();
	$$('#bildrCode_projectWrapper_84 .file').removeClass('selected');
	this.addClass('selected');
	el = this.getElement('.genericFile').get('rel');
	
	//console.log(fileScroll_84);
	
	var goTo = document.id('bildrCode_'+el);
	
	//console.log('bildrCode_'+el);
	
	fileScroll_84.toElement(goTo);
});



	
		var moduleAccordion = new Fx.Accordion($$('.bildrCode_moduleHead'), $$('.bildrCode_moduleFileBarTest'), {
			display: 0,
			onActive: function(toggler, element){
				element.getParent().addClass('selected');
				
				//console.log(toggler);
				
				var firstFile = toggler.getParent().getElement('.bildrCode_moduleFileBarTest').getElement('.genericFile');
				var id= firstFile.get('rel');
					
				$$('#bildrCode_projectWrapper_84 .file').removeClass('selected');
				firstFile.getParent('.file').addClass('selected');
					
				fileScroll_84.toElement('bildrCode_'+id);
			},
			
			onBackground: function(toggler, element){
				element.getParent().removeClass('selected');
			},
			
		});
		
		
		moduleAccordion.effects['padding-top'] = 0;
		
	<!-- Served from cache 0.397009849548 sec --!>