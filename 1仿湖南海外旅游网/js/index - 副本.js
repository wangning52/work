
	var d_Value=$(".search input.txt").val();//��ȡ������Ĭ�ϵ�ֵ
	//��ȡ����ʱ
	$(".search input.txt").focus(function(){
	//$(this)ͬ�������ǵ� $(".search input.txt")
		if($(this).val()==d_Value){
			$(this).val("");//��ǰ������ֵ����Ϊ��
			//$(this).css("border","1px solid red");
		}
	});
	//ʧȥ����
	$(".search input.txt").blur(function(){
		if($(this).val()==""){
			$(this).val(d_Value);//���������ĳ�ʼֵ
		}
	});

	//�����˵���ʵ��
	$(".Nav .mainNav ul li").hover(function(){
		$(this).find(".menu").show();//��ʾ .menu ����
		$(this).addClass("hover");//��li��� class="hover"
	},function(){
		$(this).find(".menu").hide();//����
		$(this).removeClass("hover");//�Ƴ� li class="hover"
	});

	//=======����ֲ�ͼ��ʵ��=======
	var _index=0;//��ʼ������  
	var timePlay=null;
	$("#Adv .ImgList").eq(0).show().siblings("div").hide();//�ʼ��ʾ��һ��

	$("ul.button li").hover(function(){/*���������*/ 
		clearInterval(timePlay);//�崦��ʱ������
		_index=$(this).index();//��ȡ��ǰli���к�
		//alert(_index);//����
		$(this).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
		//fadeIn  ����  fadeOut ����  
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
	},function(){/*����ƿ�*/
		autoPlay();//���ö�ʱ������
	});

	//�Զ��ֲ�
	//�����Զ��ֲ��ĺ���
	function autoPlay(){
		//alert("sss");
		//���ö�ʱ��
		timePlay=setInterval(function(){
			_index++;
			if(_index<4){
				if(_index==3){_index=-1; }//���-1 
				$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//��ʾ��Ť
				$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//��ʾͼƬ
				 
			}else{_index=-1;/*�������к�Ϊ-1,�������ŵ�һ��ͼƬ*/}
		},2000);	
	};
	autoPlay();//���ú�ִ��




	//·���Ƽ� ͼƬ���ֻ���Ч��
	$("ul.sel_imgList li").hover(function(){
			$(this).find("p").stop().animate({height:"41px"},200)
	},function(){
			$(this).find("p").stop().animate({height:"0px"},200)
			});


//��һ��������������ֲ�Ч��
var _index2=0;//���������кű���
var timeInterval=null;
$("ul.Part_ScrollBut li").hover(function(){
		clearInterval(timeInterval);//�����ʱ��
		_index2=$(this).index();//��ȡ��ǰ�����к�
		$(this).addClass("hover").siblings().removeClass("hover");//��ǰli��� class="hover" ����li�Ƴ�
		$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
		$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();//������ͬ��li��ʾ������������
},function(){autoPlay2();
		
});

//�Զ��ֲ�
function autoPlay2(){

		timeInterval=setInterval(function(){	
			_index2++;//���кż�1
			
			if(_index2==5){_index2=0;}
			if(_index2<=4){				
				$("ul.Part_ScrollBut li").eq(_index2).addClass("hover").siblings().removeClass("hover");//��ǰli��� class="hover" ����li�Ƴ�
				$(".Part_ScrollCon").animate({left:"-"+_index2*339+"px"},1000);
				$("ul.Part_ScrollTxt li").eq(_index2).show().siblings().hide();
				 if(_index2==4){_index2=-1;}
			}else{_index2=-1;}//����ط�Ҫ��Ҫ
		},3000);

};
autoPlay2();


//�������� Part3ѡ���ʽ   
function partComm(selBut,imgCon,Con){
		//alert(selBut+"---"+imgCon +Con);
		var _index3=0;
		$(selBut).mouseover(function(){
		_index3=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(imgCon).eq(_index3).show().siblings().hide();
		$(Con).eq(_index3).show().siblings().hide();
});

};

//��ͨ�õĴ��룬��װ�ں�����ͨ���εķ�ʽ��������
partComm("#Part3 p.title a.sel_a","#Part3 .part3Con .Part3ConL img","#Part3 .Part3ConR .Part3ConR_comm");
partComm("#Part4 p.title a.sel_a","#Part4 .part3Con .Part3ConL img","#Part4 .Part3ConR .Part3ConR_comm");


function partComm2(selBut,Con){
		//alert(selBut+"---"+imgCon +Con);
		var _index3=0;
		$(selBut).mouseover(function(){
		_index3=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(Con).eq(_index3).show().siblings().hide();
});

};

partComm2("#part5 ul.part5_selbut li","#part5 .part5_Con .part5_content");
//·���Ƽ����Ч��
//��껬��ȥ��Ч�� mouseover
partComm2("ul.select_but li",".select_con .select_content");

$(".part5_content .part5Comm").hover(function(){
	//$(this).find("p").stop().slideUp();//������������
		$(this).find("p").stop(true,true).slideDown();//������������չ��
},function(){
		$(this).find("p").stop(true,true).slideUp();//������������
		//$(this).find("p").stop().slideDown();//������������չ��
});


//΢�Ŷ�ά����ʾ
$("#fixedBox_Con ul li.li4 a.wxrelative").hover(function(){
		$(this).find("img.erm").show();
},function(){
		$(this).find("img.erm").hide();
});


//�ḡ�����ʾ

$(window).scroll(function(){
	var Top=$(window).scrollTop();//�����ĸ߶�
	if(Top>1000){
		$("#fixedBox").addClass("scrollDisplay");	//���������߶ȴ���1000 �ͼ�����ʽ class="scrollDisplay"
	}else{
			$("#fixedBox").removeClass("scrollDisplay");
	}
});


//���߿ͷ��رչ���
$("#Kf img.but_close").click(function(){
	$("#Kf").hide();//����	
});


//��ҳͼƬ�����л�Ч��
	//��Ť�л�Ч��
	var click_num=0;//�������
	var setTime3=null;//����ʱ��
	var setTime4=null;//���Ҷ�ʱ��
	var len=$("#webPart2_Scroll .webPart2_ScrollCon dl").length;//��ȡ�ж��ٸ� dl(ͼƬ�б�)
$("#webPart2_r img.dirl").click(function(){
		clearInterval(setTime3);//�����ʱ��
		click_num++;// ���������1
		//alert(click_num);
		if(click_num<len-2){
		$("#webPart2_Scroll .webPart2_ScrollCon").animate({left:-168*click_num+"px"},1000);
		}else{alert("��ͷ��"); click_num=len-3;}
});

	//���л���ŤЧ��
	$("#webPart2_r img.dirr").click(function(){
			clearInterval(setTime3);//�����ʱ��
			click_num--;//���������1 
			//alert(click_num);
		if(click_num>=0){
			$("#webPart2_Scroll .webPart2_ScrollCon").animate({left:-168*click_num+"px"},1000);
		}else{alert("�ұߵ�ͷ��!!"); click_num=0;}
	});

	//�Զ��ֲ�

function autoPlay3(){
		setTime3=setInterval(function(){
			//alert("ss");
			click_num++;// ���������1
			if(click_num<len-2){
				$("#webPart2_Scroll .webPart2_ScrollCon").animate({left:-168*click_num+"px"},1000);
			}else{click_num=len-3; autoPlay4();clearInterval(setTime3);//�����ʱ�� 
				}
		},1000);

			
			//alert("�Զ��ֲ�");
			}
autoPlay3();//���ú���

function autoPlay4(){
		setTime4=setInterval(function(){

			click_num--;//���������1 
		if(click_num>=0){
			$("#webPart2_Scroll .webPart2_ScrollCon").animate({left:-168*click_num+"px"},1000);
		}else{ click_num=0;autoPlay3();clearInterval(setTime4);//�����ʱ��
			}

		},1000);
}



//��ҳ����ֲ�����ʽ
var web_index=0;
var top_click=0;
var sjs=1;
var arrylist=null;
$("#webPart1_l ul.webAdvbutton li").click(function(){
	//  ���class="hover"   �Ƴ� class="hover"
	$(this).addClass("hover").siblings().removeClass("hover");
	web_index=$(this).index();//��ȡ��ǰ�����li�����к�

	$(".webAdvcon img").eq(top_click).css("z-index","3");
	$(".webAdvcon img").eq(web_index).css("z-index","2");

	sjs=getRandom(4)-1;
	arrylist=['top','right','bottom','left'];
	alert(arrylist[sjs]);

if(web_index==top_click){}else{

	//if(sjs==1){
		//animate({�ı����ʽ},ʱ��,function(){��ǰ�涯��ִ����֮����ִ��})
			alert(arrylist[sjs]);	
		$(".webAdvcon img").eq(top_click).animate({arrylist[sjs]:"-361px"},500,function(){
			//$(".webAdvcon img").eq(top_click).css({"left":"0px","z-index":"0"});
			$(".webAdvcon img").eq(top_click).removeAttr("style"); 
				top_click=web_index;
			
		});	
	//}





/*

	if(sjs==2){
		$(".webAdvcon img").eq(top_click).animate({top:"-270px"},500,function(){
		//$(".webAdvcon img").eq(top_click).css({"top":"0px","z-index":"0"});
		$(".webAdvcon img").eq(top_click).removeAttr("style"); 
		top_click=web_index;
		});	
	}


	if(sjs==3){
		//alert("��һ�ε�����к�"+top_click);
		$(".webAdvcon img").eq(top_click).animate({right:"-361px"},500,function(){
		//$(".webAdvcon img").eq(top_click).css({"right":"0px","z-index":"0"});
		$(".webAdvcon img").eq(top_click).removeAttr("style"); 
			top_click=web_index;
		});	
		
	}

	if(sjs==0){
		
			$(".webAdvcon img").eq(top_click).animate({bottom:"-270px"},500,function(){
			//$(".webAdvcon img").eq(top_click).css({"bottom":"0px","z-index":"0"});
			$(".webAdvcon img").eq(top_click).removeAttr("style"); 
			top_click=web_index;
			});	
		
	}*/

}//�����ظ�����




});


function getRandom(n){
        return Math.floor(Math.random()*n+1)
        }
