# Minimalist Nginx error pages

A set of custom minimalist 4xx and 5xx error pages for Nginx.

## Preview
![404 error page](https://i.imgur.com/UhkO7uP.pngg)

## Installation

1. Navigate into Nginx's default document directory:
	```
    cd /user/share/nginx/html
    ```
2. Clone the repository:
	```
    git clone CLONE-LINK
    ```

3. Add the custom error pages to the server's default configuration in `/etc/nginx/sites-enabled/default` file:
	```
    server {
    ...
    include /usr/share/nginx/html/nginx-errors/nginx-errors.conf
    }
    ```
4. Verify the configuration and reload Nginx:
	```
    sudo nginx -t
    sudo service nginx reload
    ```