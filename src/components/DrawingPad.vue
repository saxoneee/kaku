<template>
	<div class="inner">
		<canvas
			ref="canvas"
			width="0"
			height="0"
		></canvas>
	</div>
</template>

<script>
import EventBus from "../utils/EventBus";
import kakuLib from "../lib/kakuLib";
import Cursor from "../utils/Cursor";
import Utils from "../utils/Utils";

export default {
	name: "DrawingPad",

	created() {
		this.drawStartGridItem = null;
	},

	mounted() {
		const _me = this;

		if(Utils.isTouchDevice()){
			_me.$refs.canvas.addEventListener('touchstart', _me.initDraw);
		}else{
			_me.$refs.canvas.addEventListener('mousedown', _me.initDraw);
		}

		EventBus.$on("setConfigDefaults", function (pDefaults) {
			kakuLib.init(_me.$refs.canvas, pDefaults);
			kakuLib.setGridSize(pDefaults.gridSize);
			_me.gridSize = pDefaults.gridSize;
			_me.colorToUse = pDefaults.colorToUse;
			_me.drawMode = pDefaults.drawMode;
			_me.showGridLines = pDefaults.showGridLines;
			_me.gridItemSize = pDefaults.gridItemSize;
		});

		Cursor.addCursorChanger(_me.$refs.canvas, function () {
			return 'hide';
		});


		// listen to events from controls
		EventBus.$on("changeColor", function (pColorCode) {
			_me.colorToUse = pColorCode;
		});

		EventBus.$on("changeDrawMode", function (pDrawMode) {
			_me.drawMode = pDrawMode;
		});

		EventBus.$on("changeGridSize", function (pGridSize) {
			_me.gridSize = pGridSize;
			kakuLib.setGridSize(pGridSize);
		});

		EventBus.$on("downloadImage", function (pImageType) {
			kakuLib.downloadImage("kaku_img", pImageType);
		});

		EventBus.$on("changeShowGridLines", function (pImageType) {
			kakuLib.showGridLines(!!pImageType);
		});

		EventBus.$on("changeGridItemSize", function (pSize) {
			kakuLib.changeGridItemSize(pSize);
		});

		EventBus.$on("undo", function () {
			kakuLib.undo();
		});
	},

	methods: {
		/**
		 * get the clicked grid item and color it with drawmode
		 *
		 * @param {pEvent} - PointerEvent
		 */
		draw: function (pEvent) {
			const _me = this;

			const _gridItem = kakuLib.getGridItemFromEvent(pEvent);
			if (_gridItem) {
				kakuLib.applyDrawMode(_me.drawMode, _me.colorToUse, {
						current: _gridItem,
						start: _me.drawStartGridItem
				});
			}
		},

		/**
		 * init drawing events
		 */
		initDraw: function (pEvent) {
			var _me = this;

			// only left mouse button on desktop
			if(!Utils.isTouchDevice() && pEvent.which !== 1){
				return;
			}

			kakuLib.cacheGridMap();
			kakuLib.updateHistory();

			var _event = _me.getCursorEvent(pEvent);
			_me.drawStartGridItem = kakuLib.getGridItemFromEvent(_event);

			var _mouseUp = function (pEvent) {
				var _event = _me.getCursorEvent(pEvent);

				if(Utils.isTouchDevice()){
					window.removeEventListener("touchend", _mouseUp);
					window.removeEventListener("touchmove", _mouseMove);
				}else{
					window.removeEventListener("mouseup", _mouseUp);
					window.removeEventListener("mousemove", _mouseMove);
				}
				_me.draw(_event);

				_me.drawStartGridItem = null;
			};
			var _mouseMove = function (pEvent) {
				var _event = _me.getCursorEvent(pEvent);
				_me.draw(_event);
			};

			if(Utils.isTouchDevice()){
				window.addEventListener("touchend", _mouseUp);
				window.addEventListener("touchmove", _mouseMove);
			}else{
				window.addEventListener("mouseup", _mouseUp);
				window.addEventListener("mousemove", _mouseMove);
			}
		},

		getCursorEvent: function(pEvent){
			var _event = Utils.getCursorEvent(pEvent);

			return _event;
		}

	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	canvas{
		box-shadow: 0px 0px 2px #aaa;
	}
</style>
