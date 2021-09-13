module.exports = async (bot, Discord) => {
    class CustomEvent {

        constructor(ev, client, test, func) {
            this.client = client;
            this.ev = ev;
            this.tester = test;
            this.func = func;
            this.id = null;
            this.saved = false;
        }

        test(ev, value) { 
            return this.tester(value) && this.ev == ev;
        }

        execute(ev, value) {
            if (this.test(ev, value)) {
                var x = this.func(value, this);
                if (!x) return;
                if (x.destroy) this.destroy();
                if (x.log) console.log(x.log);
                if (x.return) return x.return;
            }
        }

        save() {
            if (this.saved) throw new Error('ALREADY SAVED!!');
            if (!this.id) {
                var x = Math.floor(Math.random() * 10000);
                if (this.client.events[this.ev].keys) while (this.client.events[this.ev].keys.includes(x)) x = Math.floor(Math.random() * 10000);
                this.id = x;
            }
            this.client.events[this.ev][this.id] = this;
            this.saved = true;
            return this;
        }

        destroy() {
            delete this.client.events[this.ev][this.id];
            return this;
        }

    }

    bot.events = new Discord.Collection();
    bot.events.class = CustomEvent;
    1232
    return bot.events.class;
    
}