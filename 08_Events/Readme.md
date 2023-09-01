# events

### All events in javascript runs sequencially,there are exceptions which are Async function .


#### we can use Onclick alert in html file but that is not a good practice, so we do it as:
```javascript
document.getElementById('owl').onclick = function(){
  alert('owl clicked')
}
```
#### but this doesn't gives us more data and features so, we use eventListeners


### best approach is
```javascript
document.getElementById('owl')addEventListener('click',function(/* event Object */){},false)
```
#### False is default value, so we dont use it in normal syntax 

#### basics Events are:- type, timestamp, defaultPrevention, target, toElement, srcElement, currentTarget

#### clientX, clientY, screenX, screenY, altkey, ctrlkey, shiftkey, keycode


### what is "false" 
##### event propogation is of 2 types, event bubbling(false) and event capturing(true)


## bubbling : down to up
## capturing : up to down

### to stop this propogation we use
```javascript
  document.getElementById('images').addEventListener('click',(e)=>{
        console.log("clicked inside the ul")
    },false)

  document.getElementById('owl').addEventListener('click',(e)=>{
        console.log("clicked inside the owl")
        e.stopPropagation()
    },false)
```

# what is Async function
### 