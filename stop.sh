if [ ! "$(docker ps -q -f name=front-end)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=front-end)" ]; then
        # cleanup
        docker rm front-end
    fi
fi