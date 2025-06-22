# ./flake.nix
{
  description = "A directory environment for web development using nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }: 
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      # to allow unfree software
      config.allowUnfree = true;
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs_22
	pkgs.mysql84
      ];

      shellHook = ''
	echo "Directory environment loaded"
        echo "Setting variables for mysql"

        export MYSQL_DATA_DIR=$PWD/backend/mysql-data
        export MYSQL_SOCKET=$MYSQL_DATA_DIR/mysql.sock
        mkdir -p $MYSQL_DATA_DIR

        if [ ! -d "$MYSQL_DATA_DIR/mysql" ]; then
          echo "Initializing MySQL data directory at $MYSQL_DATA_DIR..."
          mysqld --initialize-insecure --datadir=$MYSQL_DATA_DIR
        fi

  	echo "Running setup.sql..."
  	mysql -u root --socket="$MYSQL_SOCKET" < "$PWD/backend/setup.sql"

        export MYSQL_UNIX_PORT=$MYSQL_SOCKET
        export PATH=${pkgs.mysql84}/bin:$PATH
      '';
    };
  };
}

