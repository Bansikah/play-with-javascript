function stopWatcher() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        startTime = new Date();
        running = true;
    }
    this.stop = function() {
        endTime = new Date();
        running = false;
    }
    this.reset = function() {
        startTime = undefined;
        endTime = undefined;
        running = false;
    }
    this.isRunning = function() {
        return running;
    }
    this.getDuration = function() {
        return duration;
    }
    this.getElapsedTime = function() {
        return endTime - startTime;
    }
    this.update = function() {
        if (startTime && endTime) {
            duration = endTime - startTime;
        }
    }
    return this;

    Object.defineProperty(
        this,
        'running',
        {
            get: function() {
                return running;
            },
            set: function(value) {
                running = value;
            }
        }
    );
}