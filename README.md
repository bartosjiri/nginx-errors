# Minimalist Nginx Error Pages

A full set of custom error pages (28&times; HTTP 4xx & 11x&times; HTTP 5xx) for Nginx in a sleek, minimalist and mobile-friendly design. The error pages feature a brief explanation and a button to navigate back.

## Preview

![Example error page](https://i.imgur.com/UhkO7uP.pngg)

## Installation

### 1. Prepare installation (all linux flavors)

```console
# Navigate to homedir or some other workspace
cd ~

# Get the files
git clone https://github.com/bartosjiri/nginx-errors.git

# Create install directory
sudo mkdir /usr/share/nginx/nginx-errors

# Copy files to install directory
sudo cp -r nginx-errors/* /usr/share/nginx/nginx-errors
```

### 2. Flavor-specific installation steps

#### 1. For Debian-based systems

For Debian and other Debian-based systems like Ubuntu, the standard is to have global config in `conf.d/` and reusable snippets in `snippets/`. Run the following commands to create symlinks in these locations:

```console
# Navigate to nginx config dir
cd /etc/nginx/

# Create Debian-style symlink to nginx-errors-global.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors-global.conf conf.d/nginx-errors-global.conf

# Create Debian-style symlink to nginx-errors.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors.conf snippets/nginx-errors.conf
```

DEB-based nginx packages offer no directory for default virtual host configuration out of the box. Instead, they provide a default configuration template. This template and your own configuration files live in `sites-available/`. Add this to every `server` block in these files:

```nginx
include /etc/nginx/snippets/nginx-errors.conf;
```

#### 2. For RHEL-based systems

For Red Hat Enterprise Linux and RHEL-style systems like Fedora, CentOS, Alma Linux, Rocky Linux, etc., the standard is to have global config in `conf.d/` and global vhost defaults in `default.d/`. Run the following commands to create symlinks in these locations:

```console
# Navigate to nginx config dir
cd /etc/nginx/

# Create RHEL-style symlink to nginx-errors-global.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors-global.conf conf.d/nginx-errors-global.conf

# Create RHEL-style symlink to nginx-errors.conf
sudo ln -s /usr/share/nginx/nginx-errors/nginx-errors.conf default.d/nginx-errors.conf
```

Typically, `default.d/` should already be included in your `server` blocks:

```nginx
include /etc/nginx/default.d/*.conf;
```

If your configuration doesn't make use `default.d/`, add this to every `server` block in your configuration:

```nginx
include /etc/nginx/default.d/nginx-errors.conf;
```

### 3. Finish installation

Finish the installation by running configuration tests and reload nginx:

```console
sudo nginx -t
sudo systemctl reload nginx
```

Done. Your nginx server is now using the new error pages. :-)
