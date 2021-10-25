this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "To the most beautiful girl who has given me the most beautiful 3 years of life, Every love story is special, unique and beautiful—but ours is my favorite. When a love is true, there is no ending. I hope we get to celebrate for many years to come,I want to love you, adore you, take care of you and make you the happiest person there ever was for all of time. Happy 3rd anniversary suuu!";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
