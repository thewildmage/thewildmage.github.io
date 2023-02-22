# Stylelint Config Reminders

For my future self, so I'll stop forgetting why exactly I added certain settings to [`.stylelintrc.json`](.stylelintrc.json).

TODO: Stylelint v15 is now available, and it [deprecates all stylistic rules](https://stylelint.io/migration-guide/to-15). [Super-Linter hasn't yet updated past v14](https://github.com/github/super-linter/blob/main/dependencies/package.json), but when it does, I should revisit and remove deprecated rules.

## `custom-property-empty-line-before`: null

Turning off this setting enables me to group custom properties however I see fit, which is especially beneficial in cases like:

```css
.blah {
	--color-a: pink;
	--color-b: teal;

	--size-400: 1rem;
}
```

The gap between variables is made clear by the change in naming convention. Adding a comment about the `--size-400` variable here, as was required when this rule was turned on, just creates excess fluff.

## `declaration-colon-newline-after`: null

Conflicts with Prettier. For example, the following is as formatted by Prettier, but will trip an error on any but the `null` configuration of this rule:

```css
.conflict {
	--utopia-type-200-slope: (
		(var(--type-200-max) - var(--type-200-min)) / var(--utopia-run)
	);
}
```

## `indentation`: null

Conflicts with Prettier in instances like:

```css
.conflict {
	background: linear-gradient(
			to right,
			var(--color-primary-darker),
			var(--color-secondary-darker)
		) border-box;
}
```

Turning this off allows Prettier to take over full control of indentation decisions.

## `order/order`

This used to just include `custom-properties` and `declarations`, but `at-rules` and `rules` are now included becaues native CSS nesting is coming. The order of these last two may need adjustment, but was set as written here to keep media queries as close as possible to the rulesets they modify.
