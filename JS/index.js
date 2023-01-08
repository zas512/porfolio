let typed = new Typed('.typing',{
    strings:['','Web Developer','Graphic Designer','Web Designer','UI/UX Designer'],
    typeSpeed:100,
    BackSpeed:70,
    loop:true
})

const nav = document.querySelector('.nav'), navlist = document.querySelectorAll('li'), totalNavList = navlist.length,allSection = document.querySelectorAll('.sect'),totalSection = allSection.length

for(let i=0; i<totalNavList;i++){
 const a = navlist[i].querySelector('a')
 a.addEventListener('click', function(){
    removeBackSection()
    for(let j=0;j<totalNavList;j++){
      if(navlist[j].querySelector('a').classList.contains('active')){
        addBackSection(j)
      }
      navlist[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active')
    showSection(this)
    if(window.innerWidth<1200){
      asideSectionTogglerBtn()
    }
  })
}
      
function removeBackSection(){
 for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove('back-section')
 }
}

function addBackSection(num){
 allSection[num].classList.add('back-section')
}

      function showSection(element){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove('active')
        }
        const target = element.getAttribute('href').split('#')[1]
        document.querySelector('#' + target).classList.add('active')
      }

      function updateNav(element){
        for(let i=0;i<totalNavList;i++){
          navlist[i].querySelector('a').classList.remove('active')
          const target = element.getAttribute('href').split('#')[1]
          if(target === navlist[i].querySelector('a').getAttribute('href').split('#')[1]){
            navlist[i].querySelector('a').classList.add('active')
          }
        }
      }

      document.querySelector('.btn-hire-me').addEventListener('click',function(){
        const sectionIndex = this.getAttribute('data-section-index')
        showSection(this)
        updateNav(this)
        removeBackSection()
        addBackSection(sectionIndex)
      })
     
const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside')
      navTogglerBtn.addEventListener('click',()=>{
        asideSectionTogglerBtn()
      })

      function asideSectionTogglerBtn(){
        aside.classList.toggle('open')
        navTogglerBtn.classList.toggle('open')
        for(let i=0;i<totalSection;i++){
          allSection[i].classList.toggle('open')
        }
      }