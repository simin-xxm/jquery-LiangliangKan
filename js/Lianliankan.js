
	
	var i=4;
	var biao=null;
	biao=setInterval("my1()",1000);
	
	function my1(){
		$("#c1").html(i);
		i--;
		if(i<0)
		{
			$("img").fadeTo(200,0.1,function(){
				$("img").attr("src","img/timg8.jpg");
				$("img").attr("bz","0");
				$("img").fadeTo(200,1);
				$("img").stop(true,true);
			});
			clearInterval(biao);
			biao1=setInterval("my2()",1000);
			console.log(biao1);
		}
	}
	
	var j=5;
	var biao1=null;
	
	function my2() {
		$("#c1").html(j);
		$("#c2").text("游戏还剩：");
		j=j-1;
		if(j===-1) {
			clearInterval(biao1);
			alert("游戏结束");
			window.location.reload();
		}
		if($("img:visible").length===-1) {
			clearInterval(biao1);
			alert("good");
			window.location.reload();
		
		}
	}
	
	
	
		$(function() {
			
			var arr=new Array();
			var sum=5;
					//随机生成一个数   math.floor 去掉小数 降位 ceil（）升位；
	
			while(true)
			{
				var myk=Math.ceil(Math.random()*60); //随机生成整数；
						
				if(arr.indexOf(myk)<0) //判断数组中间是否有相同数据
				{
					arr.push(myk); //推入到数组 arr中；	
					sum=sum-1;					
				}
	
				if(sum<0)
				{
					break;
				}
			}
					
			var arr1=arr; //复制一份数组
					
			arr=arr.concat(arr1); //将两个数组合并
					
	//				arr.sort(); 排序 从小到大排序
					
			arr.sort(function(){
				return Math.random()>0.5 ? 1 : -1 ;
			});
	
			$("section").html("");
				
			for(var i=0;i<arr.length;i++)
			{
				$("section").append('<img src="img/pet ('+arr[i]+').jpg" bz="1"  />');
			}	
			
			
			
			//记录一开始的排列顺序
			var flag=0;//点击了几次
			var x=0;
			var y=0;// 点击图片对应的数组的值
			var k1=0;//保留第一次点击图片的值
			
			
			$("img").click(function(){
				
				var k=$("img").index(this);// 获得具体的某一张图片的序号
				
				var bz=$("img").eq(k).attr("bz");
				if(bz=="1")
				{
					return;
				}
				
				$("img").eq(k).attr("src","img/pet ("+arr[k]+").jpg");
				$("img").eq(k).attr("bz","1");
				
				if(flag==0)
				{
					x=arr[k]; //保留第一张图片的值 
					flag=1;
					k1=k;	//保留第一次点击图片的值
				}else{ 			//第二次点击
					y=arr[k];	//保留第二张图片的值
					flag=0;		//改图标的原来标志
					
					if(x==y)
					{
						$("img").eq(k).hide(500);
						$("img").eq(k1).hide(500);
						
					}else{
						$("img").eq(k).fadeTo(500,0.1,function(){
							$("img").eq(k).attr("src","img/timg8.jpg");
							$("img").eq(k).attr("bz","0");
							$("img").eq(k).fadeTo(500,1);						
						});
						
						$("img").eq(k1).fadeTo(500,0.1,function(){
							$("img").eq(k1).attr("src","img/timg8.jpg");
							$("img").eq(k1).attr("bz","0");
							$("img").eq(k1).fadeTo(500,1);						
						})	
					}
				}
			})
			
			
			
		});
