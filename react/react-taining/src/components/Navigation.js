import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return(
            <div class="container-fluid">
      				<nav>
      					<ul class="nav nav-pills">
      						<li>
      							<a class="nav-link active" href="https://www.google.com/search?q=landscape+image&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjV2vLl9MnhAhUVSY8KHSFoDRAQ_AUIDigB&biw=1535&bih=755" target="_blank"><b>Landscape</b></a>
      						</li>
      						<li>
      							<a class="nav-link active" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:mountains:P77dXRXKvKY%3D&usg=AI4_-kTJ1TYcpGK1rg-zXQoh481Zjd7pkQ&sa=X&ved=0ahUKEwjQ19Dn9MnhAhUr8XMBHQ0MAaUQ4lYIWCgZ&biw=1535&bih=755&dpr=1" target="_blank"><b>Mountains</b></a>
      						</li>
      						<li>
      							<a class="nav-link active" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:city:I_F4bSd203k%3D&usg=AI4_-kR69SfT-3QA5LZV0cBzPgk4Ny96SQ&sa=X&ved=0ahUKEwjC0L2O9snhAhXFjOYKHQFaBwwQ4lYINigI&biw=1535&bih=755&dpr=1" target="_blank"><b>City</b></a>
      						</li>
      						<li>
      							<a class="nav-link active" href="https://www.google.com/search?biw=1535&bih=755&tbm=isch&sa=1&ei=yy-wXKnEJaDVz7sPwbK52As&q=nature+image+hd&oq=nature+image&gs_l=img.1.1.0j0i67j0l8.31442.32505..35809...0.0..0.170.775.0j6......1....1..gws-wiz-img.......0i7i30.Bc64ZkszsaU" target="_blank"><b>Nature</b></a>
      						</li>
      						<li>
      							<a class="nav-link active" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:painting:vzziwqUQgcI%3D&usg=AI4_-kTlicSLTCj5opajC5XlKtV4CJgFrQ&sa=X&ved=0ahUKEwjC0L2O9snhAhXFjOYKHQFaBwwQ4lYILCgD&biw=1535&bih=755&dpr=1" target="_blank"><b>Painting</b></a>
      						</li>
      						<li class="nav-item dropdown">
      			      			<a class="nav-link dropdown-toggle" data-toggle="dropdown"><b>More</b></a>
      			      			<div class="dropdown-menu">
      			        		<a class="dropdown-item" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:beach:9oIn5Z61YOY%3D&usg=AI4_-kT1xITStv0NxLl4A6BYA_cQVmT7Pw&sa=X&ved=0ahUKEwjC0L2O9snhAhXFjOYKHQFaBwwQ4lYIMCgF&biw=1535&bih=755&dpr=1" target="_blank"><b>Beach</b></a>
      					        <a class="dropdown-item" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:sunset:GSITXw0STTM%3D&usg=AI4_-kRQUanzl3UZIAriWumCkGg9C3WsRQ&sa=X&ved=0ahUKEwj4hbPj9snhAhX0jOYKHepuD7QQ4lYIQigO&biw=1535&bih=755&dpr=1" target="_blank"><b>Sunset</b></a>
      					        <a class="dropdown-item" href="https://www.google.com/search?tbm=isch&q=landscape+image&chips=q:landscape+image,g_1:drawing:jbgXesTtWVY%3D&usg=AI4_-kSsMQMJ78441Md3zYZABzeyOzhC9w&sa=X&ved=0ahUKEwj4hbPj9snhAhX0jOYKHepuD7QQ4lYIOigK&biw=1535&bih=755&dpr=1" target="_blank"><b>Drawing</b></a>
      					        </div>
      		      			</li>
      		      			<li>
            						<textarea class="textarea1" placeholder="Search">
                        </textarea>
            					</li>
      					</ul>
      				</nav>
      			</div>
          );
        }
      }

  export default Navigation;
