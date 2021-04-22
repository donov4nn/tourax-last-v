<script>
	import { spring } from 'svelte/motion';
	import { pannable } from '$lib/pannable.js';
    import { flip } from 'svelte/animate';

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

    let bounce = false
    function handleMousemove(e) {
        // setTimeout(() => bounce = true, 5000)
        // setTimeout(() => bounce = false, 15000)
    }
</script>

<div class={bounce ? 'box bounce' : 'box' }
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
    on:mousemove={handleMousemove}
	style="transform:
        translate({$coords.x}px,{$coords.y}px)
        rotate({$coords.x * 0.2}deg)"
><img src="/spool.svg" alt="spool"  /></div>

<style style lang="postcss">
	.box {
        position: absolute;
		width: 100px;
		height: 100px;
		left: calc(50% - 150px / 2);
		top: calc(50% - 250px / 2);
		background-color: transparent;
		cursor: move;
        transition : slow;
	}

    img {
        user-select : none;
        pointer-events: none;
        position : absolute;
    }

    @keyframes bounce{
        0%{
            transform:translate(4rem, 15rem);
        }
        25%{
            transform:translate(15rem, 4rem);
        }
        50%{
            transform:translate(-4rem, -25rem);
        }
        75%{
            transform:translate(28rem, 5rem);
        }
        100%{
            transform:translate(44rem, 15rem);
        }
    }

    .bounce{
        animation:bounce 1s linear 100;
    }
</style>